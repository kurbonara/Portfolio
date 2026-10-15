import useTitle from '../components/useTitle.js'
import { PageHeader, ContactBlock } from '../components/Sections.jsx'

export default function Contact() {
  useTitle('Contact')
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build something together">
        Open to internships and entry-level roles in front-end, game, and Salesforce development, and in design and
        motion work.
      </PageHeader>
      <section className="container page-body">
        <ContactBlock />
      </section>
    </>
  )
}
