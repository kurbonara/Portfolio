import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { PageHeader, EducationAndAwards } from '../components/Sections.jsx'
import { certifications } from '../data.js'

// Certifications grouped by year, newest first (dates look like "Oct 2026").
function byYear() {
  const groups = new Map()
  for (const c of certifications) {
    const year = c.date.slice(-4)
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year).push(c)
  }
  return [...groups.entries()].sort(([a], [b]) => b - a)
}

export default function Education() {
  useTitle('Education')
  return (
    <>
      <PageHeader eyebrow="Education" title="Education, honors & certifications">
        Where I study, what I've been recognized for, and the certifications I've earned along the way.
      </PageHeader>

      <section className="container page-body creds">
        <EducationAndAwards />

        <div className="timeline">
          <h2 className="cred-block__label">Certifications</h2>
          {byYear().map(([year, items], i) => (
            <Reveal key={year} className="timeline__year" delay={i * 60}>
              <h3 className="timeline__label">{year}</h3>
              <ul>
                {items.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    <span className="cert-list__date">{c.date.slice(0, 3)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
