import Header from '../components/Header'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

// Front page. Sections in order.
function Home() {
  return (
    <>
      <Header />
      <main>
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default Home
