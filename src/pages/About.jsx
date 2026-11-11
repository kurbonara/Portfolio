import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import GraphEditor from '../components/GraphEditor.jsx'
import { PageHeader, Portrait, Facts, Interests, SkillsTable, EducationAndAwards, CertList } from '../components/Sections.jsx'
import { profile, education } from '../data.js'

// Everything about the person: bio, skills, education, and interests.
export default function About() {
  useTitle('About', {
    description: 'About Kurt Tristan R. Dela Rosa, a BSIT student at Bulacan State University building with React and Unity. Skills, education and certifications.',
  })

  return (
    <>
      <PageHeader eyebrow="About" title={profile.name}>
        {profile.role}, studying {education.degree} at {education.school}.
      </PageHeader>

      <section className="container page-body about-page">
        <Reveal className="portrait about-page__photo">
          <Portrait />
        </Reveal>

        <div className="about-page__text">
          <Reveal>
            {profile.about.map((para) => (
              <p key={para} className="about__objective">
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal delay={60}>
            <Facts />
          </Reveal>
          <Reveal className="hero__actions" delay={140}>
            <Link className="btn btn--solid" to="/projects">
              See my work
            </Link>
            <Link className="btn btn--outline" to="/contact">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container about-block about-fun" id="fun">
        <div className="about-fun__text">
          <h2 className="about-block__title">Mess with my easing curves</h2>
          <p className="muted">
            Off the clock I animate in After Effects, so here's a tiny Graph Editor. Drag the handles, pick a preset,
            and watch the layer move with your curve.
          </p>
        </div>
        <Reveal>
          <GraphEditor />
        </Reveal>
      </section>

      <section className="container about-block" id="skills">
        <h2 className="about-block__title">Skills</h2>
        <SkillsTable />
      </section>

      <section className="container about-block" id="education">
        <h2 className="about-block__title">Education, honors & certifications</h2>
        <div className="creds">
          <EducationAndAwards />
          <CertList />
        </div>
      </section>

      <section className="container about-block page-body" id="interests">
        <h2 className="about-block__title">Things I'm into</h2>
        <Interests />
      </section>
    </>
  )
}
