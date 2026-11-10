import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { profile, projects } from '../data.js'
import { Hero, ProjectFilters, ProjectGrid, CopyEmail, Arrow } from '../components/Sections.jsx'

// A few headline tools for the home page; the full list lives on the About page.
const TOOLBOX = ['React', 'Next.js', 'TypeScript', 'Supabase', 'Swift', 'SwiftUI', 'Unity', 'C#', 'Figma', 'After Effects']

export default function Home() {
  useTitle()
  // The filter lives in the address (?type=web) so a filtered view can be shared.
  const [params, setParams] = useSearchParams()
  const filter = params.get('type') || 'all'
  const [preview, setPreview] = useState(null)

  const setFilter = (id) => setParams(id === 'all' ? {} : { type: id }, { replace: true })
  const pickFromIntro = (id) => {
    setFilter(id)
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
    <>
      <Hero onPick={pickFromIntro} onPreview={setPreview} />

      <section className="container work" id="work">
        <div className="work__head">
          <h2 className="work__title">Things I've built</h2>
          <ProjectFilters active={filter} onChange={setFilter} />
        </div>
        <ProjectGrid filter={filter} preview={filter === 'all' ? preview : null} />
      </section>

      {/* A strip of tools that slides by. Doubled so the loop is seamless. */}
      <div className="marquee" aria-label="Tools I use">
        <div className="marquee__track">
          {[...TOOLBOX, ...TOOLBOX].map((t, i) => (
            <span key={i} aria-hidden={i >= TOOLBOX.length}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <section className="container bento-about" id="about">
        <Reveal className="ba ba--text">
          <p className="label">About</p>
          {profile.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <Link className="more-link" to="/about">
            More about me, skills & education <Arrow />
          </Link>
        </Reveal>
        <Reveal className="ba ba--status" delay={80}>
          <span className="status__dot" aria-hidden="true" />
          <strong>{profile.status}</strong>
          <span className="ba__hand">say hi!</span>
        </Reveal>
        <Reveal className="ba ba--count" delay={140}>
          <strong>{projects.length}</strong>
          <span>projects built & counting</span>
        </Reveal>
        {[...profile.facts, { label: 'Based in', value: profile.city }].map((f, i) => (
          <Reveal key={f.label} className={`ba ba--fact ba--fact-${i}`} delay={120 + i * 60}>
            <span>{f.label}</span>
            <strong>{f.value}</strong>
          </Reveal>
        ))}
      </section>

      <section className="container" id="contact">
        <Reveal className="cta-panel">
          <span className="cta-panel__sticker">open to internships!</span>
          <h2 className="cta-panel__title">Got an internship or a project? Let's talk.</h2>
          <p className="cta-panel__sub">Drop me a message. I'd love to hear about it.</p>
          <div className="cta__actions">
            <CopyEmail className="btn btn--light" />
            <a className="btn btn--ghost-light" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <Link className="btn btn--ghost-light" to="/contact">
              Send a message
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
