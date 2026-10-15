import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'

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

  const close = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" onClick={close} aria-label="Kurt Tristan Dela Rosa, home">
          KURT<span className="logo__slash">\</span>TRISTAN
        </a>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close}>
            Contact
          </a>
        </nav>

        <div className="nav__actions">
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
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
