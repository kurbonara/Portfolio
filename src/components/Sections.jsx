import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Cover from './Cover.jsx'
import { profile, projects, categories, skills, certifications, education, awards, interests } from '../data.js'

export function Arrow() {
  return <span aria-hidden="true">→</span>
}

export function SectionHead({ eyebrow, title, more, children }) {
  return (
    <Reveal className="section-head">
      <div className="section-head__row">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        {more && (
          <Link className="more-link" to={more.to}>
            {more.label} <Arrow />
          </Link>
        )}
      </div>
      {children && <p className="section-lede">{children}</p>}
    </Reveal>
  )
}

export function PageHeader({ eyebrow, title, back, children }) {
  return (
    <header className="page-header container">
      {back && (
        <Reveal>
          <Link className="back-link" to={back.to}>
            <span aria-hidden="true">←</span> {back.label}
          </Link>
        </Reveal>
      )}
      <Reveal as="p" className="eyebrow" delay={40}>
        {eyebrow}
      </Reveal>
      <Reveal as="h1" className="page-title" delay={80}>
        {title}
      </Reveal>
      {children && (
        <Reveal as="p" className="page-lede" delay={120}>
          {children}
        </Reveal>
      )}
    </header>
  )
}

export function Portrait() {
  const [photoOk, setPhotoOk] = useState(true)
  return (
    <>
      {photoOk ? (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setPhotoOk(false)} />
      ) : (
        <div className="portrait__fallback" aria-hidden="true">
          KD
        </div>
      )}
      <div className="portrait__tag">
        <strong>{profile.shortName}</strong>
        <span>{profile.city}</span>
      </div>
    </>
  )
}

export function Facts() {
  return (
    <dl className="hero__facts">
      {profile.facts.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}

// Copies the email address and briefly says so; falls back to opening the mail app.
export function CopyEmail({ className = 'btn btn--solid' }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <button type="button" className={`${className} copy-email ${copied ? 'is-copied' : ''}`} onClick={copy}>
      {copied ? 'Copied ✓' : 'Copy my email'}
    </button>
  )
}

// The words in the intro double as filters for the project grid below.
const INTRO_WORDS = { web: 'web', mac: 'Mac', game: 'game' }

export function Hero({ onPick, onPreview }) {
  // Dots near the pointer light up (see .intro-wrap in the CSS).
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const word = (id) => (
    <button
      type="button"
      className={`intro__word intro__word--${id}`}
      onClick={() => onPick(id)}
      onPointerEnter={() => onPreview(id)}
      onPointerLeave={() => onPreview(null)}
      onFocus={() => onPreview(id)}
      onBlur={() => onPreview(null)}
    >
      {INTRO_WORDS[id]}
    </button>
  )
  return (
    <section className="intro-wrap" id="top" onPointerMove={onMove}>
      <div className="container intro">
        <Reveal className="intro__me">
          <img className="intro__face" src={profile.photo} alt={`Portrait of ${profile.name}`} width="72" height="72" />
          <span>
            <strong>{profile.name}</strong>
            <span>{profile.city}</span>
          </span>
        </Reveal>
        <Reveal as="h1" className="intro__title">
          Hi, I'm Kurt. I build apps for the {word('web')}, the {word('mac')}, and the occasional {word('game')}.
        </Reveal>
        <Reveal as="p" className="intro__sub" delay={120}>
          <span className="status__dot" aria-hidden="true" />
          BSIT student at Bulacan State University · {profile.status.toLowerCase()}
        </Reveal>
        <Reveal className="intro__actions" delay={200}>
          <CopyEmail />
          <a className="btn btn--outline" href={profile.resume} target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}

export function ProjectFilters({ active, onChange }) {
  const options = [{ id: 'all', label: 'All' }, ...categories]
  return (
    <div className="filters" role="tablist" aria-label="Filter projects">
      {options.map((o) => {
        const count = o.id === 'all' ? projects.length : projects.filter((p) => p.category === o.id).length
        return (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={active === o.id}
            className={`filters__pill ${active === o.id ? 'is-active' : ''}`}
            onClick={() => onChange(o.id)}
          >
            {o.label}
            <span className="filters__count">{count}</span>
          </button>
        )
      })}
    </div>
  )
}

// One project card. The whole card opens the project; the "Live" link opens the real site.
export function ProjectCard({ project: p, wide, dim }) {
  return (
    <article className={`card ${wide ? 'card--wide' : ''} ${dim ? 'is-dim' : ''}`}>
      <div className="card__media">
        <Cover project={p} className="card__cover" />
      </div>
      <div className="card__body">
        <div className="card__top">
          <span className={`badge badge--${p.category}`}>{p.badge}</span>
          {p.year && <span className="card__year">{p.year}</span>}
        </div>
        <h3 className="card__title">
          <img className="card__icon" src={p.icon} alt="" width="30" height="30" />
          <Link to={`/projects/${p.id}`} className="card__link">
            {p.title}
          </Link>
        </h3>
        <p className="card__tagline">{wide ? p.summary : p.tagline}</p>
        {wide && (
          <ul className="tags card__tags">
            {p.stack.slice(0, 5).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <div className="card__foot">
          <span className="card__kind">{p.kind}</span>
          <span className="card__view" aria-hidden="true">
            View project →
          </span>
          {p.url && (
            <a className="card__live" href={p.url} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

// Bento grid: featured projects span the full width when showing everything, and if the
// rest leave an odd one out at the end, that one goes wide too so no row is half empty.
export function ProjectGrid({ filter = 'all', preview = null }) {
  const shown = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const isFeatured = (p) => p.featured && filter === 'all'
  const regular = shown.filter((p) => !isFeatured(p))
  const lastAlone = regular.length % 2 === 1 ? regular[regular.length - 1] : null
  return (
    <div className="bento">
      {shown.map((p, i) => {
        const wide = isFeatured(p) || p === lastAlone
        return (
          <Reveal key={p.id} className={wide ? 'bento__wide' : ''} delay={(i % 2) * 60}>
            <ProjectCard project={p} wide={wide} dim={preview && p.category !== preview} />
          </Reveal>
        )
      })}
    </div>
  )
}

export function SkillsTable() {
  return (
    <Reveal className="surface skills">
      {skills.map((s) => (
        <div key={s.group} className="skill-row">
          <h3>{s.group}</h3>
          <Tags items={s.items} />
        </div>
      ))}
    </Reveal>
  )
}

export function EducationAndAwards() {
  return (
    <div className="creds__col">
      <Reveal className="cred-block">
        <h3 className="cred-block__label">Education</h3>
        <p className="cred-block__title">{education.school}</p>
        <p className="cred-block__text">{education.degree}</p>
        <p className="cred-block__text muted">{education.major}</p>
        <p className="cred-block__date">{education.years}</p>
      </Reveal>
      {awards.map((a) => (
        <Reveal key={a.name} className="cred-block" delay={80}>
          <h3 className="cred-block__label">Award</h3>
          <p className="cred-block__title">{a.name}</p>
          <p className="cred-block__text muted">{a.org}</p>
          <p className="cred-block__date">{a.date}</p>
        </Reveal>
      ))}
    </div>
  )
}

export function CertList() {
  return (
    <Reveal className="cert-list" delay={120}>
      <h3 className="cred-block__label">Certifications</h3>
      <ul>
        {certifications.map((c) => (
          <li key={c.name}>
            <span>{c.name}</span>
            <span className="cert-list__date">{c.date}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export function Interests() {
  return (
    <Reveal className="surface about__interests" delay={100}>
      <h3 className="cred-block__label">Interests</h3>
      <ul className="interests">
        {interests.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </Reveal>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // No backend: hand the message to the visitor's mail app.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <form className="surface form" onSubmit={submit}>
      <div className="form__row">
        <label>
          Your name
          <input required value={form.name} onChange={set('name')} autoComplete="name" />
        </label>
        <label>
          Your email
          <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
        </label>
      </div>
      <label className="form__message">
        Message
        <textarea required rows="5" value={form.message} onChange={set('message')} />
      </label>
      <div className="form__foot">
        <button className="btn btn--solid" type="submit">
          Send message
        </button>
        <span className="muted">Opens your mail app</span>
      </div>
    </form>
  )
}

export function ContactBlock() {
  return (
    <div className="contact">
      <Reveal className="contact__cards">
        <div className="surface contact-card">
          <p className="contact-card__label">Email</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="surface contact-card">
          <p className="contact-card__label">Phone</p>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </div>
        <div className="surface contact-card">
          <p className="contact-card__label">Based in</p>
          <span>{profile.location}</span>
        </div>
        <a className="btn btn--outline" href={profile.resume} download>
          Download résumé
        </a>
      </Reveal>
      <Reveal className="contact__form" delay={100}>
        <ContactForm />
      </Reveal>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          Made by {profile.name} in {profile.city}, {new Date().getFullYear()}.
        </span>
        <span className="footer__links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </span>
      </div>
    </footer>
  )
}

