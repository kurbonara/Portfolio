import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { PageHeader, SkillsTable, Tags, Arrow } from '../components/Sections.jsx'
import { projects } from '../data.js'

export default function Skills() {
  useTitle('Skills')
  return (
    <>
      <PageHeader eyebrow="Toolkit" title="Skills">
        The languages, frameworks, and tools I work with, and the projects where I've put them to use.
      </PageHeader>

      <section className="container page-body">
        <SkillsTable />

        <section className="case-section">
          <Reveal as="h2" className="case-section__title">
            In practice
          </Reveal>
          <div className="practice">
            {projects.map((p, i) => (
              <Reveal key={p.id} className="surface practice__row" delay={i * 60}>
                <div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.subtitle}</p>
                </div>
                <Tags items={p.stack} />
                <Link className="more-link" to={`/work/${p.id}`}>
                  Case study <Arrow />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
