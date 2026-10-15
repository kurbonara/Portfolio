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
  return (
    <section className="hero container" id="top">
      <Reveal as="h1" className="hero__title">
        <a href="#work" className="ul">Games</a> and <a href="#work" className="ul">software</a> built
        with care, light, and purpose
      </Reveal>
      <Reveal className="hero__lede" delay={120}>
        <p>
          I'm {profile.shortName}, a front-end developer and IT student at Bulacan State University. I build web and
          mobile interfaces in React, games in Unity and C#, and visuals in Photoshop, Illustrator, Premiere Pro, and
          After Effects.
        </p>
      </Reveal>
    </section>
  )
}

function FeaturedCard() {
  return (
    <Reveal className="container">
      <a href={`#${featured.id}`} className="feature">
        <div className="feature__scene" aria-hidden="true">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="xMaxYMax slice">
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
            <circle className="scene__moon" cx="250" cy="90" r="26" />
            <g className="scene__beam">
              <polygon points="901,179 1400,120 1400,238" fill="url(#beam-r)" />
              <polygon points="901,179 402,120 402,238" fill="url(#beam-l)" />
            </g>
            <path className="scene__isle scene__isle--far" d="M0 300 L0 268 Q60 240 140 262 Q200 250 260 276 L300 300 Z" />
            <path className="scene__isle scene__isle--far" d="M470 300 Q520 284 570 289 Q600 292 625 300 Z" />
            <path className="scene__isle" d="M740 300 Q800 266 860 261 Q900 252 960 257 Q1030 265 1090 300 Z" />
            <polygon className="scene__isle" points="889,262 913,262 907,186 895,186" />
            <rect className="scene__lamp" x="894" y="172" width="14" height="14" />
            <polygon className="scene__isle" points="889,172 901,159 913,172" />
            <circle cx="901" cy="179" r="34" fill="url(#lamp-glow)" />
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
                  <span className="muted">{p.date}</span>
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
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} className="skill-card" delay={(i % 3) * 80}>
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
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
            <p className="serif">{education.degree}</p>
            <p className="serif muted">{education.major}</p>
            <p className="cred-block__date">{education.years}</p>
          </Reveal>
          {awards.map((a) => (
            <Reveal key={a.name} className="cred-block" delay={80}>
              <h3 className="cred-block__label">Award</h3>
              <p className="cred-block__title">{a.name}</p>
              <p className="serif muted">{a.org}</p>
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
  const [photoOk, setPhotoOk] = useState(true)
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <Reveal className="about__photo">
          {photoOk ? (
            <img src={profile.photo} alt={profile.name} onError={() => setPhotoOk(false)} />
          ) : (
            <div className="about__monogram" aria-hidden="true">
              KT
            </div>
          )}
        </Reveal>
        <Reveal className="about__text" delay={100}>
          <p className="eyebrow">About</p>
          <h2 className="section-title">{profile.name}</h2>
          <p className="serif about__objective">{profile.objective}</p>
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

function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Reveal className="footer__cta">
          <h2 className="footer__title">Let's build something together.</h2>
          <p className="serif footer__lede">
            Open to internships and entry-level roles in front-end, game, and Salesforce development, and in
            design and motion work.
          </p>
          <div className="footer__actions">
            <a className="btn btn--light" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn--ghost" href={profile.phoneHref}>
              {profile.phone}
            </a>
            <a className="btn btn--ghost" href={profile.resume} download>
              Download résumé
            </a>
          </div>
        </Reveal>
        <div className="footer__bottom">
          <span className="logo logo--light">
            KURT<span className="logo__slash">\</span>TRISTAN
          </span>
          <span>{profile.location}</span>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
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
      </main>
      <Contact />
    </>
  )
}
