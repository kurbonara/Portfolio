import { useEffect, useRef, useState } from 'react'
import { pluck } from '../sound.js'
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

const CELL = 48
const CLEAR = 14 // px of side padding kept around the intro's text, avatar, and buttons
const ICON_HALF = 8 // half a resting logo's size
const REACH = 170 // px around the pointer that reacts
const GROW = 0.75 // extra scale at the pointer (1.75×: 16px → 28px)

export default function IconField() {
  const ref = useRef(null)
  const [cells, setCells] = useState([])

  // Lay out a staggered grid that covers the intro, leaving out any spot behind the
  // text, avatar, or buttons (so logos never show through between letters).
  useEffect(() => {
    const host = ref.current.parentElement
    const layout = () => {
      const box = host.getBoundingClientRect()
      const blocked = []
      const range = document.createRange()
      for (const el of host.querySelectorAll('.intro > *')) {
        range.selectNodeContents(el)
        // One rectangle per line of text, so short lines keep logos beside them.
        for (const r of range.getClientRects()) {
          // Text boxes are taller than the letters (room for accents and descenders),
          // so trim them a little top and bottom to hug what's actually drawn.
          const trim = (r.bottom - r.top) * 0.15
          blocked.push({
            l: r.left - box.left - CLEAR,
            r: r.right - box.left + CLEAR,
            t: r.top - box.top + trim,
            b: r.bottom - box.top - trim,
          })
        }
      }
      // Skip a logo only if the logo itself would overlap a blocked box.
      const isBlocked = (x, y) =>
        blocked.some(
          (k) => x + ICON_HALF > k.l && x - ICON_HALF < k.r && y + ICON_HALF > k.t && y - ICON_HALF < k.b
        )
      // Straight columns, shifted so one column sits in the middle of the margin left of
      // the text (a staggered grid left every other row of that narrow strip empty).
      const textLeft = Math.min(...blocked.map((k) => k.l + CLEAR))
      const x0 = Number.isFinite(textLeft) ? ((textLeft / 2) % CELL + CELL) % CELL : CELL / 2
      const cols = Math.ceil(box.width / CELL) + 1
      const rows = Math.ceil(box.height / CELL) + 1
      const next = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = x0 + c * CELL
          const y = r * CELL + CELL / 2
          if (isBlocked(x, y)) continue
          // Fade out only near the bottom of the intro (fully visible down to 75%, gone at the edge).
          const fade = Math.min(1, Math.max(0, (box.height - y) / (box.height * 0.25)))
          if (fade <= 0) continue
          next.push({ icon: ICONS[(r * 7 + c * 3) % ICONS.length], x, y, wave: c + r, fade })
        }
      }
      setCells(next)
    }
    const ro = new ResizeObserver(layout)
    ro.observe(host)
    // Fonts change line widths once they load.
    document.fonts?.ready.then(layout)
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
    // Sound: a note each time the pointer lands on a new logo (spaced at least 70ms apart).
    let lastHit = null
    let lastNote = 0
    const width = host.getBoundingClientRect().width || 1
    const update = () => {
      raf = 0
      let hit = null
      for (const el of items) {
        if (Math.abs(el._x - px) < 12 && Math.abs(el._y - py) < 12) hit = el
        const d = Math.hypot(el._x - px, el._y - py)
        const t = Math.max(0, 1 - d / REACH)
        el.style.setProperty('--t', t.toFixed(3))
        // Drawn at full size and scaled down at rest, so it stays crisp while it grows.
        el.style.setProperty('--s', ((1 + t * t * GROW) / (1 + GROW)).toFixed(3))
      }
      if (hit !== lastHit) {
        lastHit = hit
        const now = performance.now()
        if (hit && now - lastNote > 70) {
          lastNote = now
          // Left to right walks up two octaves of the scale.
          pluck((hit._x / width) * 10)
        }
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
          style={{ left: c.x, top: c.y, '--wave': c.wave, opacity: c.fade }}
        >
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path className="icon-field__grey" d={c.icon.path} />
            <path className="icon-field__color" d={c.icon.path} fill={fill(c.icon.hex)} />
          </svg>
        </span>
      ))}
    </div>
  )
}
