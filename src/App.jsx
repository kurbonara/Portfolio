import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Reveal from './components/Reveal.jsx'
import {
  profile,
  featured,
  projects,
  skills,
  certifications,
  education,
  awards,
  interests,
} from './data.js'

function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </Reveal>
  )
}

function Hero() {
  const [photoOk, setPhotoOk] = useState(true)
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
          <a className="btn btn--solid" href="#work">
            View my work
          </a>
          <a className="btn btn--outline" href="#contact">
            Get in touch
          </a>
        </Reveal>
        <Reveal as="dl" className="hero__facts" delay={300}>
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="portrait" delay={150}>
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
      </Reveal>
    </section>
  )
}

function FeaturedCard() {
  return (
    <Reveal className="container">
      <a href={`#${featured.id}`} className="feature">
        <div className="feature__scene" aria-hidden="true">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="xMaxYMax meet">
            <defs>
              <linearGradient id="beam-r" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#ffd68c" stopOpacity="0.55" />
                <stop offset="1" stopColor="#ffd68c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beam-l" x1="1" x2="0" y1="0" y2="0">
                <stop offset="0" stopColor="#ffd68c" stopOpacity="0.55" />
                <stop offset="1" stopColor="#ffd68c" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="lamp-glow">
                <stop offset="0" stopColor="#ffe2a8" stopOpacity="0.9" />
                <stop offset="1" stopColor="#ffe2a8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g className="scene__beam">
              <polygon points="901,124 1400,40 1400,208" fill="url(#beam-r)" />
              <polygon points="901,124 402,40 402,208" fill="url(#beam-l)" />
            </g>
            <path className="scene__isle scene__isle--far" d="M0 300 L0 268 Q60 240 140 262 Q200 250 260 276 L300 300 Z" />
            <path className="scene__isle scene__isle--far" d="M470 300 Q520 284 570 289 Q600 292 625 300 Z" />
            <path className="scene__isle" d="M740 300 Q800 266 860 261 Q900 252 960 257 Q1030 265 1090 300 Z" />
            {/* Lighthouse: tapered tower, stripe, balcony, lantern room, roof. */}
            <polygon className="scene__isle" points="878,262 924,262 914,148 888,148" />
            <polygon className="scene__tower-band" points="883,212 919,212 917,192 885,192" />
            <rect className="scene__tower-window" x="897" y="168" width="8" height="12" rx="4" />
            <rect className="scene__isle" x="880" y="141" width="42" height="7" rx="1" />
            <rect className="scene__isle" x="886" y="137" width="30" height="4" />
            <rect className="scene__isle" x="887" y="111" width="28" height="26" />
            <rect className="scene__lamp" x="891" y="114" width="20" height="20" />
            <rect className="scene__isle" x="900" y="114" width="2" height="20" />
            <polygon className="scene__isle" points="883,111 901,92 919,111" />
            <rect className="scene__isle" x="900" y="84" width="2" height="9" />
            <circle cx="901" cy="124" r="56" fill="url(#lamp-glow)" />
            <rect className="scene__sea" x="0" y="300" width="1200" height="100" />
            <g className="scene__glints">
              <rect x="888" y="312" width="26" height="1.5" />
              <rect x="880" y="326" width="42" height="1.5" />
              <rect x="892" y="342" width="18" height="1.5" />
            </g>
          </svg>
          <div className="fog fog--1" />
          <div className="fog fog--2" />
          <div className="fog fog--3" />
        </div>

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
            Explore the project <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </Reveal>
  )
}

function Projects() {
  const [open, setOpen] = useState(projects[0].id)

  return (
    <section className="section container" id="work">
      <SectionHead eyebrow="Selected work" title="Projects">
        Two games, a capstone platform, and a mobile UI system, each taken from idea to working build.
      </SectionHead>

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
                  <ul className="tags">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHead eyebrow="Toolkit" title="Technical skills">
          From gameplay systems to relational databases, the tools I reach for most.
        </SectionHead>
        <Reveal className="surface skills">
          {skills.map((s) => (
            <div key={s.group} className="skill-row">
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="section container" id="credentials">
      <SectionHead eyebrow="Credentials" title="Education, awards & certifications" />
      <div className="creds">
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
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <Reveal className="about__main">
          <p className="eyebrow">About</p>
          <h2 className="section-title">How I work</h2>
          <p className="about__objective">{profile.objective}</p>
        </Reveal>
        <Reveal className="surface about__interests" delay={100}>
          <h3 className="cred-block__label">Interests</h3>
          <ul className="interests">
            {interests.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
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

function Contact() {
  return (
    <section className="section container" id="contact">
      <SectionHead eyebrow="Contact" title="Let's build something together">
        Open to internships and entry-level roles in front-end, game, and Salesforce development, and in design and
        motion work.
      </SectionHead>
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
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="brand">
          <span className="brand__mark">KD</span>
          {profile.name}
        </span>
        <span>Built with React + Vite</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedCard />
        <Projects />
        <Skills />
        <Credentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
