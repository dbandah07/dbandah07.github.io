import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

/**
 * Page outline. Each section owns its own markup and styles.
 */
function App() {
  return (
    <>
      <Header />
      <main>
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
