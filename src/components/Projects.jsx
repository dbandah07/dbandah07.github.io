import { Link } from 'react-router'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

/**
 * Front-page portfolio section. Only renders entries flagged featured: true.
 */

function Projects() {
  const featured = projects.filter((project) => project.featured)
  // /projects is only worth linking when it has more than what's shown here
  const hasMore = projects.length > featured.length

  return (
    <section id="portfolio" className={styles.section}>
      <h2 className={styles.heading}>Portfolio</h2>

      <div className={styles.grid}>
        {/* first one leads across the full row, the next four fill the row under it */}
        {featured.map((project, i) => (
          <ProjectCard key={project.id} {...project} wide={i === 0} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.footer}>
          <Link to="/projects" className={`btn ${styles.more}`}>
            All projects ({projects.length})
          </Link>
        </div>
      )}
    </section>
  )
}

export default Projects
