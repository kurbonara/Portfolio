import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { profile, skills } from '../data.js'
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

  const totalSkills = skills.reduce((n, s) => n + s.items.length, 0)

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

      <section className="container home-about" id="about">
        <Reveal className="home-about__text">
          <p className="label">About</p>
          {profile.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <Link className="more-link" to="/about">
            More about me, skills & education <Arrow />
          </Link>
        </Reveal>
        <Reveal className="home-about__tools" delay={100}>
          <p className="label">Usually reaching for</p>
          <ul className="toolbox">
            {TOOLBOX.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="muted home-about__note">…and {totalSkills - TOOLBOX.length}+ more on the About page.</p>
        </Reveal>
      </section>

      <section className="container cta" id="contact">
        <Reveal>
          <h2 className="cta__title">
            Got an internship or a project? <span className="cta__accent">Let's talk.</span>
          </h2>
          <div className="cta__actions">
            <CopyEmail />
            <a className="btn btn--outline" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <Link className="btn btn--outline" to="/contact">
              Send a message
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
