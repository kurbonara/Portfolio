import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import FogScene from '../components/FogScene.jsx'
import useTitle from '../components/useTitle.js'
import { PageHeader, Tags, Arrow } from '../components/Sections.jsx'
import NotFound from './NotFound.jsx'
import { projects } from '../data.js'

export default function Project() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const p = projects[index]
  useTitle(p ? p.title : 'Not found')
  if (!p) return <NotFound />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  const meta = [
    { label: 'Type', value: p.kind },
    { label: 'Platform', value: p.platform },
    p.date && { label: 'Completed', value: p.date },
  ].filter(Boolean)

  return (
    <>
      <PageHeader eyebrow={p.subtitle} title={p.title} back={{ to: '/work', label: 'All case studies' }}>
        {p.summary}
      </PageHeader>

      <div className="container page-body">
        {p.id === 'fogbound' && (
          <Reveal className="case-banner feature" aria-hidden="true">
            <FogScene fit="slice" />
          </Reveal>
        )}

        <Reveal as="dl" className="case-meta">
          {meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </Reveal>

        <div className="case-grid">
          {[
            ['Problem', p.problem],
            ['Solution', p.solution],
            ['Role', p.role],
          ].map(([label, text], i) => (
            <Reveal key={label} className="surface case-card" delay={i * 80}>
              <h2 className="cred-block__label">{label}</h2>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <section className="case-section">
          <Reveal as="h2" className="case-section__title">
            What I did
          </Reveal>
          <Reveal as="ul" className="project__points case-points">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </Reveal>
        </section>

        <section className="case-section">
          <Reveal as="h2" className="case-section__title">
            Built with
          </Reveal>
          <Reveal>
            <Tags items={p.stack} />
          </Reveal>
        </section>

        <nav className="case-nav" aria-label="More projects">
          <Link to={`/work/${prev.id}`} className="surface case-nav__link">
            <span className="muted">
              <span aria-hidden="true">←</span> Previous
            </span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/work/${next.id}`} className="surface case-nav__link case-nav__link--next">
            <span className="muted">
              Next <Arrow />
            </span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </div>
    </>
  )
}
