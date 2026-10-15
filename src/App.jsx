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
          I'm {profile.shortName}, an IT student at Bulacan State University building 3D and 2D games in Unity and
          C#, full-stack web and mobile apps in React, and automation on Salesforce.
        </p>
      </Reveal>
    </section>
  )
}

function FeaturedCard() {
  return (
    <Reveal className="container">
      <a href="#lost-light" className="feature-card">
        <svg className="arch" viewBox="0 0 1000 340" role="img" aria-label={featured.title}>
          <defs>
            <path id="arch-text" d="M 150 260 Q 500 70 850 260" />
          </defs>
          <text className="arch__text" textAnchor="middle">
            <textPath href="#arch-text" startOffset="50%">
              {featured.title}
            </textPath>
          </text>
          <path className="arch__line" d="M 20 338 Q 500 150 980 338" />
        </svg>
        <p className="feature-card__tagline">{featured.tagline}</p>
        <p className="feature-card__meta">
          {featured.meta} <span aria-hidden="true">→</span>
        </p>
      </a>
    </Reveal>
  )
}

function Projects() {
  const [open, setOpen] = useState(projects[0].id)

  return (
    <section className="section container" id="work">
      <SectionHead eyebrow="Selected work" title="Projects">
        A capstone platform, a complete game, and a mobile UI system, each built with a team and shipped end to end.
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
            Open to internships and entry-level roles in game, web, mobile, and Salesforce development.
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
