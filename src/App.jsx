import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import AllProjects from './pages/AllProjects'
import ProjectPage from './pages/ProjectPage'
import Nav from './components/Nav'
import Footer from './components/Footer'

// new page starts at the top, a #hash scrolls to that section instead.
// key changes on every click, so Portfolio still scrolls when the hash is already set
function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) {
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: still ? 'auto' : 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])
  return null
}

// page outline, shows on every page
function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
