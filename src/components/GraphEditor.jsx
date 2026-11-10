import { useEffect, useRef, useState } from 'react'

// A tiny After Effects "Graph Editor": drag the two bezier handles to shape the easing,
// and the layer in the comp preview plays with that exact curve.

const PRESETS = {
  Linear: [0, 0, 1, 1],
  'Easy Ease': [0.33, 0, 0.67, 1],
  Snappy: [0.16, 1, 0.3, 1],
  Overshoot: [0.34, 1.56, 0.64, 1],
}
const DURATION = 1100 // ms per pass
const HOLD = 450 // ms pause at each end

// Progress at time x (0..1) for a cubic-bezier(x1, y1, x2, y2).
function ease([x1, y1, x2, y2], x) {
  const bez = (a, b, t) => 3 * a * (1 - t) ** 2 * t + 3 * b * (1 - t) * t ** 2 + t ** 3
  let lo = 0
  let hi = 1
  let t = x
  for (let i = 0; i < 24; i++) {
    t = (lo + hi) / 2
    if (bez(x1, x2, t) < x) lo = t
    else hi = t
  }
  return bez(y1, y2, t)
}

// Graph area in SVG units: x 0..1 maps to 40..280, y 0..1 maps to 250..70 (room for overshoot).
const G = { x0: 40, x1: 280, y0: 250, y1: 70 }
const toSvg = (x, y) => [G.x0 + x * (G.x1 - G.x0), G.y0 - y * (G.y0 - G.y1)]
const fromSvg = (sx, sy) => [(sx - G.x0) / (G.x1 - G.x0), (G.y0 - sy) / (G.y0 - G.y1)]
const round = (n) => Math.round(n * 100) / 100

export default function GraphEditor() {
  const [curve, setCurve] = useState(PRESETS['Easy Ease'])
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const svgRef = useRef(null)
  const layerRef = useRef(null)
  const playheadRef = useRef(null)
  const dragging = useRef(null)
  const curveRef = useRef(curve)
  curveRef.current = curve

  // Play loop: forward, hold, backward, hold.
  useEffect(() => {
    if (!playing) return
    let raf = 0
    const start = performance.now()
    const cycle = 2 * (DURATION + HOLD)
    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const t = (now - start) % cycle
      let x
      if (t < DURATION) x = t / DURATION
      else if (t < DURATION + HOLD) x = 1
      else if (t < 2 * DURATION + HOLD) x = 1 - (t - DURATION - HOLD) / DURATION
      else x = 0
      const forward = t < DURATION + HOLD
      const p = ease(curveRef.current, forward ? x : 1 - x)
      const v = forward ? p : 1 - p
      layerRef.current?.style.setProperty('--p', v)
      playheadRef.current?.style.setProperty('--t', forward ? x : 1 - x)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  const pointerToCurve = (e) => {
    const svg = svgRef.current
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const { x, y } = pt.matrixTransform(svg.getScreenCTM().inverse())
    const [cx, cy] = fromSvg(x, y)
    return [Math.min(1, Math.max(0, cx)), Math.min(1.5, Math.max(-0.45, cy))]
  }
  const onDown = (which) => (e) => {
    dragging.current = which
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    const [x, y] = pointerToCurve(e)
    setCurve((c) => (dragging.current === 1 ? [round(x), round(y), c[2], c[3]] : [c[0], c[1], round(x), round(y)]))
  }
  const onUp = () => {
    dragging.current = null
  }

  const [p1x, p1y] = toSvg(curve[0], curve[1])
  const [p2x, p2y] = toSvg(curve[2], curve[3])
  const [sx, sy] = toSvg(0, 0)
  const [ex, ey] = toSvg(1, 1)
  const activePreset = Object.keys(PRESETS).find((k) => PRESETS[k].every((v, i) => v === curve[i]))

  return (
    <div className="ae">
      <section className="ae-card ae-card--graph">
        <p className="ae-card__label">Graph editor</p>
        <svg
          ref={svgRef}
          viewBox="28 -30 264 360"
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          role="img"
          aria-label={`Easing curve cubic-bezier(${curve.join(', ')})`}
        >
          {[0, 0.25, 0.5, 0.75, 1].map((g) => {
            const [gx] = toSvg(g, 0)
            const [, gy] = toSvg(0, g)
            return (
              <g key={g} className="ae__grid">
                <line x1={gx} y1={G.y1 - 20} x2={gx} y2={G.y0 + 20} />
                <line x1={G.x0} y1={gy} x2={G.x1} y2={gy} />
              </g>
            )
          })}
          <line className="ae__handle-line" x1={sx} y1={sy} x2={p1x} y2={p1y} />
          <line className="ae__handle-line" x1={ex} y1={ey} x2={p2x} y2={p2y} />
          <path className="ae__curve" d={`M${sx} ${sy} C${p1x} ${p1y} ${p2x} ${p2y} ${ex} ${ey}`} />
          <rect className="ae__key" x={sx - 6} y={sy - 6} width="12" height="12" transform={`rotate(45 ${sx} ${sy})`} />
          <rect className="ae__key" x={ex - 6} y={ey - 6} width="12" height="12" transform={`rotate(45 ${ex} ${ey})`} />
          <circle className="ae__knob" cx={p1x} cy={p1y} r="11" onPointerDown={onDown(1)} />
          <circle className="ae__knob" cx={p2x} cy={p2y} r="11" onPointerDown={onDown(2)} />
        </svg>
        <p className="ae__hint">Drag the yellow handles</p>
      </section>

      <section className="ae-card ae-card--preview">
        <div className="ae-card__head">
          <p className="ae-card__label">Preview</p>
          <button type="button" className="ae__play" onClick={() => setPlaying((v) => !v)}>
            {playing ? '❚❚ Pause' : '▶ Play'}
          </button>
        </div>
        <div className="ae__comp">
          {/* The animator's classic: a ball. */}
          <div className="ae__layer" ref={layerRef}>
            <span className="ae__ball" />
            <span className="ae__shadow" />
          </div>
        </div>
        <div className="ae__timeline">
          <span className="ae__keyframe ae__keyframe--a" />
          <span className="ae__keyframe ae__keyframe--b" />
          <span className="ae__playhead" ref={playheadRef} />
        </div>
      </section>

      <section className="ae-card ae-card--presets">
        <p className="ae-card__label">Presets</p>
        <div className="ae__presets">
          {Object.keys(PRESETS).map((name) => (
            <button
              key={name}
              type="button"
              className={activePreset === name ? 'is-active' : ''}
              onClick={() => setCurve(PRESETS[name])}
            >
              {name}
            </button>
          ))}
        </div>
        <code className="ae__code">
          cubic-bezier(
          <br />
          {curve.join(', ')})
        </code>
      </section>
    </div>
  )
}
