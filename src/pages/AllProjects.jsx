import { useState } from 'react'
import { Link } from 'react-router'
import { projects, CATEGORIES } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectFilters from '../components/ProjectFilters'
import styles from './AllProjects.module.css'

// how many projects sit in each category, for the pill counts
const counts = CATEGORIES.reduce((acc, name) => {
  acc[name] = projects.filter((p) => p.categories.includes(name)).length
  return acc
}, {})

/**
 * /projects -- the full list with category filters.
 *
 * `active` is the only piece of state. Changing it re-runs this function and
 * React swaps the grid; the filtering itself is just an array filter, no
 * effect or extra state needed.
 */
function AllProjects() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(active))

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.back}>
        ← Back
      </Link>

      <h1 className={styles.title}>All projects</h1>

      <ProjectFilters
        categories={CATEGORIES}
        active={active}
        onChange={setActive}
        counts={counts}
        total={projects.length}
      />

      {visible.length > 0 ? (
        <div className={styles.grid}>
          {visible.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Nothing here yet.</p>
      )}
    </main>
  )
}

export default AllProjects
