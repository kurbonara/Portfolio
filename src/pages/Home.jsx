import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { profile } from '../data.js'
import {
  SectionHead,
  Hero,
  FeaturedCard,
  ProjectsAccordion,
  SkillsTable,
  EducationAndAwards,
  CertList,
  Interests,
  ContactBlock,
} from '../components/Sections.jsx'

// The home page keeps every section; each one links to its own page for more depth.
export default function Home() {
  useTitle()
  return (
    <>
      <Hero />
      <FeaturedCard />

      <section className="section container" id="work">
        <SectionHead eyebrow="Selected work" title="Projects" more={{ to: '/projects', label: 'All projects' }}>
          Two games, a capstone platform, and a mobile UI system, each taken from idea to working build.
        </SectionHead>
        <ProjectsAccordion />
      </section>

      <section className="section section--alt" id="skills">
        <div className="container">
          <SectionHead eyebrow="Toolkit" title="Technical skills" more={{ to: '/skills', label: 'Skills in practice' }}>
            From gameplay systems to relational databases, the tools I reach for most.
          </SectionHead>
          <SkillsTable />
        </div>
      </section>

      <section className="section container" id="education">
        <SectionHead
          eyebrow="Education"
          title="Education, honors & certifications"
          more={{ to: '/education', label: 'Full timeline' }}
        />
        <div className="creds">
          <EducationAndAwards />
          <CertList />
        </div>
      </section>

      <section className="section section--alt" id="about">
        <div className="container about">
          <Reveal className="about__main">
            <SectionHead eyebrow="About" title="How I work" more={{ to: '/about', label: 'More about me' }} />
            <p className="about__objective">{profile.objective}</p>
          </Reveal>
          <Interests />
        </div>
      </section>

      <section className="section container" id="contact">
        <SectionHead eyebrow="Contact" title="Let's build something together">
          Open to internships and entry-level roles in front-end, game, and Salesforce development, and in design and
          motion work.
        </SectionHead>
        <ContactBlock />
      </section>
    </>
  )
}
