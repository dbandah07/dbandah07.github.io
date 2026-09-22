import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import Footer from './components/Footer'

// reset 
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// page outline, shows on every page
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
