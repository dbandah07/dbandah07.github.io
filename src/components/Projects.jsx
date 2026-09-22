import { Link } from 'react-router'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

/**
 * Front-page projects section. Only renders entries flagged featured: true.
 */

function Projects() {
  const featured = projects.filter((project) => project.featured)

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.heading}>
        <h2>Selected projects</h2>
        <p className={styles.subhead}>
          Shipped games and gameplay systems
        </p>
      </div>

      <div className={styles.grid}>
        {featured.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className={styles.footer}>
        <Link to="/projects" className="btn btn-primary">
          View all projects ({projects.length})
        </Link>
      </div>
    </section>
  )
}

export default Projects
