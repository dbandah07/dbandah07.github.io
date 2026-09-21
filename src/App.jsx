import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import Footer from './components/Footer'

// Router keeps the scroll position when the path changes, which lands you
// halfway down the new page. Reset it on every navigation.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

// Page outline. Footer sits outside Routes so it shows on every page.
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
