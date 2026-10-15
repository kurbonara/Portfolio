import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import { Footer } from './components/Sections.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Project from './pages/Project.jsx'
import Skills from './pages/Skills.jsx'
import Education from './pages/Education.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// New page: start at the top (or at the #section the link points to).
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

// Old addresses from before the rename keep working.
function OldProjectRedirect() {
  const { id } = useParams()
  return <Navigate to={`/projects/${id}`} replace />
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollOnNavigate />
      <Nav />
      {/* Keyed by path so each page fades in fresh. */}
      <main key={location.pathname} className="page">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route path="/work/:id" element={<OldProjectRedirect />} />
          <Route path="/credentials" element={<Navigate to="/education" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
