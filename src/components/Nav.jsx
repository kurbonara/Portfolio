import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'
import SoundToggle from './SoundToggle.jsx'

const icon = {
  home: <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z" />,
  projects: (
    <>
      <rect x="3.5" y="4" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="4" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  resume: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
}

const social = {
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h3v12H3Zm6 0h2.9v1.6h.1c.4-.8 1.4-1.8 3-1.8 3.1 0 3.7 2.1 3.7 4.8V21h-3v-6.5c0-1.6 0-3.5-2.1-3.5S12 12.7 12 14.4V21H9Z"
    />
  ),
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .8 1.5 2.2 1 2.8.8.1-.6.3-1 .6-1.2-2.1-.2-4.3-1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.7-2.2 4.5-4.3 4.7.3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21Z"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
}

function Icon({ children, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

export function Socials({ className = '' }) {
  return (
    <div className={`socials ${className}`}>
      {profile.socials.map((s) => (
        <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
          <Icon>{social[s.id]}</Icon>
        </a>
      ))}
    </div>
  )
}

const links = [
  { to: '/', label: 'home', icon: 'home', end: true },
  { to: '/projects', label: 'projects', icon: 'projects' },
  { to: '/about', label: 'about', icon: 'about' },
  { to: '/contact', label: 'contact', icon: 'contact' },
]

// Desktop: a fixed sidebar. Phones and small windows: a slim top bar.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <aside className="side" aria-label="Site">
        <Link to="/" className="side__me">
          <img src={profile.photo} alt="" width="44" height="44" />
          <span>
            <strong>Kurt Tristan</strong>
            <em>{profile.role.toLowerCase()}</em>
          </span>
        </Link>

        <nav className="side__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              <Icon>{icon[l.icon]}</Icon>
              {l.label}
            </NavLink>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer">
            <Icon>{icon.resume}</Icon>
            résumé ↗
          </a>
        </nav>

        <div className="side__foot">
          <div className="side__row">
            <Socials />
            <span className="side__toggles">
              <SoundToggle />
              <ThemeToggle />
            </span>
          </div>
        </div>
      </aside>

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__home" aria-label="Kurt Tristan Dela Rosa, home">
            <img src={profile.photo} alt="" width="28" height="28" />
            <span>Kurt Tristan</span>
          </Link>
          <nav className="nav__links" aria-label="Primary">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <SoundToggle />
            <ThemeToggle />
          </nav>
        </div>
      </header>
    </>
  )
}
