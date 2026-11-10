import { useEffect, useRef, useState } from 'react'
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siVite,
  siSupabase,
  siPostgresql,
  siSwift,
  siXcode,
  siUnity,
  siDotnet,
  siPython,
  siDjango,
  siFigma,
  siVercel,
  siGithub,
  siHtml5,
  siCss3,
  siSalesforce,
  siClaude,
  siGooglegemini,
  siAdobephotoshop,
  siAdobeillustrator,
  siAdobeaftereffects,
  siAdobepremierepro,
} from 'simple-icons'

// Logos of the tools I use, scattered over the intro. At rest they pulse in a slow
// diagonal wave; near the pointer they grow and switch to their brand colour.
const ICONS = [
  siReact, siFigma, siSwift, siSupabase, siAdobeaftereffects, siTypescript, siUnity,
  siNextdotjs, siAdobephotoshop, siPython, siTailwindcss, siXcode, siClaude, siPostgresql,
  siAdobeillustrator, siVite, siDjango, siGithub, siDotnet, siAdobepremierepro, siJavascript,
  siSalesforce, siHtml5, siGooglegemini, siCss3, siVercel,
]

// Brand colours that are black or white would vanish in one theme, so those use the text colour.
const fill = (hex) => (/^(000000|FFFFFF|181717|191919|092E20)$/i.test(hex) ? 'var(--ink)' : `#${hex}`)

const CELL = 64
const REACH = 170 // px around the pointer that reacts
const GROW = 0.8 // extra scale at the pointer (1.8×)

export default function IconField() {
  const ref = useRef(null)
  const [cells, setCells] = useState([])

  // Lay out a staggered grid that covers the intro.
  useEffect(() => {
    const host = ref.current.parentElement
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      const cols = Math.ceil(width / CELL) + 1
      const rows = Math.ceil(height / CELL) + 1
      const next = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          next.push({
            icon: ICONS[(r * 7 + c * 3) % ICONS.length],
            x: c * CELL + (r % 2 ? CELL / 2 : 0) + CELL / 2,
            y: r * CELL + CELL / 2,
            wave: c + r,
          })
        }
      }
      setCells(next)
    })
    ro.observe(host)
    return () => ro.disconnect()
  }, [])

  // Grow and colour the logos near the pointer.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const host = ref.current.parentElement
    const items = [...ref.current.children]
    let raf = 0
    let px = -9999
    let py = -9999
    const update = () => {
      raf = 0
      for (const el of items) {
        const d = Math.hypot(el._x - px, el._y - py)
        const t = Math.max(0, 1 - d / REACH)
        el.style.setProperty('--t', t.toFixed(3))
        el.style.setProperty('--s', (1 + t * t * GROW).toFixed(3))
      }
    }
    const onMove = (e) => {
      const r = host.getBoundingClientRect()
      px = e.clientX - r.left
      py = e.clientY - r.top
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onLeave = () => {
      px = py = -9999
      if (!raf) raf = requestAnimationFrame(update)
    }
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [cells])

  return (
    <div className="icon-field" ref={ref} aria-hidden="true">
      {cells.map((c, i) => (
        <span
          key={i}
          className="icon-field__item"
          ref={(el) => {
            if (el) {
              el._x = c.x
              el._y = c.y
            }
          }}
          style={{ left: c.x, top: c.y, '--wave': c.wave }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path className="icon-field__grey" d={c.icon.path} />
            <path className="icon-field__color" d={c.icon.path} fill={fill(c.icon.hex)} />
          </svg>
        </span>
      ))}
    </div>
  )
}
