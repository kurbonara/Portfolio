import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#about', label: 'About' },
]

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  // While the mobile menu is open: lock page scroll, close on Escape, and close
  // if the window grows past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return
    const root = document.documentElement
    // Browsers without scrollbar-gutter: pad by the scrollbar's width instead.
    const gap = CSS.supports('scrollbar-gutter: stable') ? 0 : window.innerWidth - root.clientWidth
    if (gap) root.style.paddingRight = `${gap}px`
    root.classList.add('menu-open')
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const mq = window.matchMedia('(min-width: 821px)')
    const onWide = (e) => e.matches && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onWide)
    return () => {
      root.classList.remove('menu-open')
      root.style.paddingRight = ''
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onWide)
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const allLinks = [...links, { href: '#contact', label: 'Contact' }]

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu' : ''}`}>
        <div className="container nav__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Kurt Tristan Dela Rosa, home">
            <span className="brand__mark">KD</span>
            Kurt Dela Rosa
          </a>

          <nav className="nav__links" aria-label="Primary">
            {allLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <div className="split-btn" ref={dropRef}>
              <a className="split-btn__main" href={`mailto:${profile.email}`}>
                Hire me
              </a>
              <button
                className="split-btn__toggle"
                aria-label="More contact options"
                aria-expanded={dropOpen}
                onClick={() => setDropOpen((v) => !v)}
              >
                <Chevron />
              </button>
              {dropOpen && (
                <div className="dropdown" role="menu">
                  <a role="menuitem" href={`mailto:${profile.email}`} onClick={() => setDropOpen(false)}>
                    Send an email
                  </a>
                  <a role="menuitem" href={profile.phoneHref} onClick={() => setDropOpen(false)}>
                    Call {profile.phone}
                  </a>
                  <a role="menuitem" href={profile.resume} download onClick={() => setDropOpen(false)}>
                    Download résumé
                  </a>
                </div>
              )}
            </div>
            <button
              className={`burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Lives outside the header: the header's backdrop-filter would otherwise
          trap this fixed layer inside the header's box. */}
      <div
        id="mobile-menu"
        className={`sheet ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ''}
      >
        <nav className="sheet__links" aria-label="Mobile">
          {allLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} style={{ '--i': i }}>
              <span className="sheet__num">0{i + 1}</span>
              <span className="sheet__label">{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="sheet__foot" style={{ '--i': allLinks.length }}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a className="btn btn--solid" href={profile.resume} download onClick={close}>
            Download résumé
          </a>
        </div>
      </div>
    </>
  )
}
