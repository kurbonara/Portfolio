import { Link } from 'react-router-dom'
import useTitle from '../components/useTitle.js'
import { PageHeader } from '../components/Sections.jsx'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <>
      <PageHeader eyebrow="404" title="Lost in the fog">
        This page isn't part of the portfolio. Head back home or browse my projects.
      </PageHeader>
      <section className="container page-body">
        <div className="hero__actions">
          <Link className="btn btn--solid" to="/">
            Back home
          </Link>
          <Link className="btn btn--outline" to="/projects">
            Projects
          </Link>
        </div>
      </section>
    </>
  )
}
