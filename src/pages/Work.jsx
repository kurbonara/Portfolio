import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { PageHeader, Tags, Arrow } from '../components/Sections.jsx'
import { projects } from '../data.js'

export default function Work() {
  useTitle('Work')
  return (
    <>
      <PageHeader eyebrow="Selected work" title="Case studies">
        The problem behind each project, what I built to solve it, and the part I played.
      </PageHeader>

      <section className="container page-body">
        <div className="work-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 80}>
              <Link to={`/work/${p.id}`} className="surface work-card">
                <div className="work-card__top">
                  <span className="project__index">0{i + 1}</span>
                  <span className="muted">{p.kind}</span>
                </div>
                <h2 className="work-card__title">{p.title}</h2>
                <p className="work-card__subtitle">{p.subtitle}</p>
                <p className="work-card__summary">{p.summary}</p>
                <Tags items={p.stack.slice(0, 4)} />
                <span className="more-link work-card__more">
                  Read the case study <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
