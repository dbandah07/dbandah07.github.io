import Header from '../components/Header'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

// front page, sec in order
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
