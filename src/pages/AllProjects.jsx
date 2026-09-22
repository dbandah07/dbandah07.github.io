import { useState } from 'react'
import { Link } from 'react-router'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectFilters from '../components/ProjectFilters'
import styles from './AllProjects.module.css'

// list for filter
const categories = [
  ...new Set(projects.flatMap((project) => project.categories ?? [])),
]

// how many projects sit in each category, for the pill counts
const counts = categories.reduce((acc, name) => {
  acc[name] = projects.filter((p) => (p.categories ?? []).includes(name)).length
  return acc
}, {})

// /projects. active is the only state, the grid is a filtered array.
function AllProjects() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All'
      ? projects
      : projects.filter((project) =>
          (project.categories ?? []).includes(active),
        )

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.back}>
        ← Back
      </Link>

      <h1 className={styles.title}>All projects</h1>

      {/* nothing tagged yet, so the row drops out instead of showing a lone All pill */}
      {categories.length > 0 && (
        <ProjectFilters
          categories={categories}
          active={active}
          onChange={setActive}
          counts={counts}
          total={projects.length}
        />
      )}

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
