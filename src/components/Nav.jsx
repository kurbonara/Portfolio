import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// Slim top bar: name on the left, a few links and the day/night switch on the right.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__home" aria-label="Kurt Tristan Dela Rosa, home">
          <img src={profile.photo} alt="" width="28" height="28" />
          <span>Kurt Tristan</span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
          <a className="nav__resume" href={profile.resume} target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
