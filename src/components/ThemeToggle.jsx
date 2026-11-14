import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { play } from '../sound.js'

// The visitor's override, plus the system theme at the moment they chose it. index.html
// drops the override on load if the system theme has changed since.
const STORAGE_KEY = 'theme'
const SYSTEM_KEY = 'theme-system'

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Only remember a choice that differs from the system. Picking the system's own theme
// clears the override, so the site goes back to following the system.
function save(theme) {
  try {
    const system = systemTheme()
    if (theme === system) {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(SYSTEM_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, theme)
      localStorage.setItem(SYSTEM_KEY, system)
    }
  } catch {
    // Private mode or blocked storage: the theme still applies for this visit.
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z" />
    </svg>
  )
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  // Follow the system setting. A system change is the newest choice, so it replaces
  // any theme the visitor picked earlier with the toggle.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      const next = e.matches ? 'dark' : 'light'
      save(next)
      applyTheme(next)
      setTheme(next)
    }
    mq.addEventListener('change', onChange)
    // Keep every toggle on the page (sidebar and top bar) showing the right icon.
    const mo = new MutationObserver(() => setTheme(document.documentElement.dataset.theme || 'light'))
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => {
      mq.removeEventListener('change', onChange)
      mo.disconnect()
    }
  }, [])

  const toggle = (e) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    save(next)
    play(next)

    const update = () => {
      applyTheme(next)
      flushSync(() => setTheme(next))
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      update()
      return
    }

    // Feathered circle growing out of the button, where supported.
    if (document.startViewTransition) {
      const root = document.documentElement
      const rect = e.currentTarget.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
      // The mask is solid to 70% of its radius and fades out after, so it must end
      // big enough that the solid part alone covers the far corner.
      const d = (r / 0.7) * 2

      // The frosted nav doesn't snapshot cleanly, so keep it solid during the switch.
      root.classList.add('theme-switching')
      const transition = document.startViewTransition(update)
      transition.ready
        .then(() => {
          root.animate(
            {
              maskSize: ['0px 0px', `${d}px ${d}px`],
              maskPosition: [`${x}px ${y}px`, `${x - d / 2}px ${y - d / 2}px`],
            },
            {
              duration: 1000,
              easing: 'cubic-bezier(0.45, 0, 0.2, 1)',
              // Hold the final frame; otherwise the mask snaps back to 0 for a frame before the transition ends.
              fill: 'forwards',
              pseudoElement: '::view-transition-new(root)',
            }
          )
        })
        .catch(() => {})
      transition.finished.finally(() => root.classList.remove('theme-switching'))
      return
    }

    // Fallback: fade every colour.
    const root = document.documentElement
    root.classList.add('theme-fade')
    update()
    window.setTimeout(() => root.classList.remove('theme-fade'), 650)
  }

  const isDark = theme === 'dark'
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <SunIcon key="sun" /> : <MoonIcon key="moon" />}
    </button>
  )
}
