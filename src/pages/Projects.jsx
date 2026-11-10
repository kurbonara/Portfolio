import { useSearchParams } from 'react-router-dom'
import useTitle from '../components/useTitle.js'
import { PageHeader, ProjectFilters, ProjectGrid } from '../components/Sections.jsx'

export default function Projects() {
  useTitle('Projects')
  const [params, setParams] = useSearchParams()
  const filter = params.get('type') || 'all'
  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I've built">
        Web apps, Mac apps, games, and design work. Open any of them for the problem behind it, how it was
        solved, and the part I played.
      </PageHeader>
      <section className="container page-body">
        <div className="work__head">
          <ProjectFilters active={filter} onChange={(id) => setParams(id === 'all' ? {} : { type: id }, { replace: true })} />
        </div>
        <ProjectGrid filter={filter} />
      </section>
    </>
  )
}
