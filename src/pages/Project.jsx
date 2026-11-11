import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Cover from '../components/Cover.jsx'
import useTitle from '../components/useTitle.js'
import NotFound from './NotFound.jsx'
import { projects } from '../data.js'

// One project: a tinted header, the cover, quick facts, then problem → what I made →
// features → tools, and a big "up next" card. Tinted with the project's own colour.
export default function Project() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const p = projects[index]
  useTitle(p ? p.title : 'Page not found', {
    description: p && `${p.title}: ${p.subtitle}. ${p.summary}`,
    index: Boolean(p),
  })
  if (!p) return <NotFound />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  const facts = [
    { label: 'Platform', value: p.platform },
    { label: p.date ? 'Finished' : 'Year', value: p.date || p.year || '—' },
    { label: 'Type', value: p.kind },
    { label: 'Tools', value: `${p.stack.length} in the stack` },
  ]

  return (
    <article className="pj" style={{ '--pc': p.color }}>
      <header className="pj-head">
        <div className="container">
          <Link className="back-link" to="/projects">
            <span aria-hidden="true">←</span> All projects
          </Link>

          <Reveal className="pj-head__row">
            <img className="pj-head__icon" src={p.icon} alt="" width="64" height="64" />
            <div>
              <p className="pj-head__badge">
                {p.badge}
                {p.team && <span> · team project</span>}
              </p>
              <h1 className="pj-head__title">{p.title}</h1>
            </div>
          </Reveal>

          <Reveal as="p" className="pj-head__tagline" delay={80}>
            {p.tagline}
          </Reveal>

          <Reveal className="pj-head__actions" delay={140}>
            {p.url && (
              <a className="btn pj-btn" href={p.url} target="_blank" rel="noreferrer">
                Visit live site ↗
              </a>
            )}
            <a className="btn btn--outline" href="#features">
              See what it does ↓
            </a>
          </Reveal>
        </div>
      </header>

      <div className="container">
        <Reveal delay={120}>
          <div className="pj-cover">
            <Cover project={p} className="pj-cover__img" />
          </div>
        </Reveal>

        <dl className="pj-facts">
          {facts.map((f, i) => (
            <Reveal key={f.label} className="pj-fact" delay={i * 60}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </Reveal>
          ))}
        </dl>

        <section className="pj-sec">
          <h2 className="pj-sec__label">The problem</h2>
          <Reveal as="p" className="pj-big">
            {p.problem}
          </Reveal>
        </section>

        <section className="pj-sec">
          <h2 className="pj-sec__label">{p.team ? 'What we made' : 'What I made'}</h2>
          <div>
            <Reveal as="p" className="pj-big">
              {p.solution}
            </Reveal>
            <Reveal className="pj-note" delay={80}>
              <p className="pj-note__title">{p.team ? 'my part' : 'who did what'}</p>
              <p>{p.role}</p>
            </Reveal>
          </div>
        </section>

        <section className="pj-sec" id="features">
          <h2 className="pj-sec__label">Features</h2>
          <div className="pj-features">
            {p.features.map((f, i) => (
              <Reveal key={f.title} className="pj-feature" delay={(i % 2) * 60}>
                <span className="pj-feature__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pj-sec">
          <h2 className="pj-sec__label">Built with</h2>
          <Reveal as="ul" className="pj-stack">
            {p.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </Reveal>
        </section>

        <nav className="pj-next" aria-label="More projects">
          <Link to={`/projects/${next.id}`} className="pj-next__card" style={{ '--pc': next.color }}>
            <span className="pj-next__hand">up next →</span>
            <span className="pj-next__text">
              <img src={next.icon} alt="" width="44" height="44" />
              <span>
                <strong>{next.title}</strong>
                <em>{next.tagline}</em>
              </span>
            </span>
            <Cover project={next} className="pj-next__cover" />
          </Link>
          <Link to={`/projects/${prev.id}`} className="pj-prev">
            <span aria-hidden="true">←</span> or go back to {prev.title}
          </Link>
        </nav>
      </div>
    </article>
  )
}
