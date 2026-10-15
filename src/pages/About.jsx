import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useTitle from '../components/useTitle.js'
import { PageHeader, Portrait, Facts, Interests, Tags } from '../components/Sections.jsx'
import { profile, education, skills } from '../data.js'

export default function About() {
  useTitle('About')
  const creative = skills.find((s) => s.group === 'Creative & Design')

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
            <h2 className="case-section__title">How I work</h2>
            <p className="about__objective">{profile.objective}</p>
          </Reveal>
          <Reveal delay={60}>
            <Facts />
          </Reveal>
          {creative && (
            <Reveal className="case-section" delay={100}>
              <h2 className="case-section__title">Beyond code</h2>
              <p className="muted about-page__note">
                I also design and edit: UI in Figma, graphics in Photoshop and Illustrator, and video and motion in
                Premiere Pro and After Effects.
              </p>
              <Tags items={creative.items} />
            </Reveal>
          )}
          <Reveal className="hero__actions" delay={140}>
            <Link className="btn btn--solid" to="/projects">
              See my work
            </Link>
            <Link className="btn btn--outline" to="/contact">
              Get in touch
            </Link>
          </Reveal>
        </div>

        <div className="about-page__interests">
          <Interests />
        </div>
      </section>
    </>
  )
}
