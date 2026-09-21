import styles from './ProjectCard.module.css'

/**
 * One project tile. Used by the front page and the full projects page.
 * The braces in the params destructure the props object.
 */
function ProjectCard({ title, year, role, blurb, tools, link, thumbnail }) {
  return (
    <article className={styles.card}>
      {/* placeholder block when there's no thumbnail, so the grid doesn't jump */}
      {thumbnail ? (
        <img className={styles.thumb} src={thumbnail} alt="" />
      ) : (
        <div className={styles.thumbEmpty} aria-hidden="true" />
      )}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </div>

        <p className={styles.role}>{role}</p>
        <p className={styles.blurb}>{blurb}</p>

        <ul className={styles.tools}>
          {tools.map((tool) => (
            <li key={tool} className={styles.tool}>
              {tool}
            </li>
          ))}
        </ul>

        {/* only render the link when there is one */}
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View project →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
