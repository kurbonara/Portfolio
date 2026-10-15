import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import FogScene from './FogScene.jsx'
import { profile, featured, projects, skills, certifications, education, awards, interests } from '../data.js'

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

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__text">
        <Reveal>
          <span className="status">
            <span className="status__dot" aria-hidden="true" />
            {profile.status}
          </span>
        </Reveal>
        <Reveal as="h1" className="hero__title" delay={60}>
          {profile.name}
        </Reveal>
        <Reveal as="p" className="hero__role" delay={120}>
          {profile.role}
        </Reveal>
        <Reveal as="p" className="hero__lede" delay={180}>
          I build web and mobile interfaces in React, games in Unity and C#, and visuals in Photoshop, Illustrator,
          Premiere Pro, and After Effects.
        </Reveal>
        <Reveal className="hero__actions" delay={240}>
          <Link className="btn btn--solid" to="/work">
            View my work
          </Link>
          <Link className="btn btn--outline" to="/contact">
            Get in touch
          </Link>
        </Reveal>
        <Reveal delay={300}>
          <Facts />
        </Reveal>
      </div>

      <Reveal className="portrait" delay={150}>
        <Portrait />
      </Reveal>
    </section>
  )
}

export function FeaturedCard() {
  return (
    <Reveal className="container">
      <Link to={`/work/${featured.id}`} className="feature">
        <FogScene />
        <div className="feature__content">
          <p className="feature__eyebrow">Featured game</p>
          <h2 className="feature__title">{featured.title}</h2>
          <p className="feature__tagline">{featured.tagline}</p>
          <ul className="feature__stats">
            {featured.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <span className="feature__cta">
            Read the case study <Arrow />
          </span>
        </div>
      </Link>
    </Reveal>
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

export function ProjectsAccordion() {
  const [open, setOpen] = useState(projects[0].id)

  return (
    <div className="projects">
      {projects.map((p, i) => {
        const isOpen = open === p.id
        return (
          <Reveal key={p.id} id={p.id} className={`project ${isOpen ? 'is-open' : ''}`} delay={i * 80}>
            <button className="project__head" onClick={() => setOpen(isOpen ? null : p.id)} aria-expanded={isOpen}>
              <span className="project__index">0{i + 1}</span>
              <span className="project__titles">
                <span className="project__title">{p.title}</span>
                <span className="project__subtitle">{p.subtitle}</span>
              </span>
              <span className="project__kind">
                {p.kind}
                <br />
                <span className="muted">{p.platform}</span>
              </span>
              <span className="project__toggle" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div className="project__body">
              <div className="project__body-inner">
                <ul className="project__points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Tags items={p.stack} />
                <Link className="more-link project__more" to={`/work/${p.id}`} tabIndex={isOpen ? 0 : -1}>
                  Read the case study <Arrow />
                </Link>
              </div>
            </div>
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
        <Link to="/" className="brand">
          <span className="brand__mark">KD</span>
          {profile.name}
        </Link>
        <span>Built with React + Vite</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
