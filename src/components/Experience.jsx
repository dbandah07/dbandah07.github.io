import { experience } from '../data/experience'
import styles from './Experience.module.css'

/**
 * Experience list. Entries live in src/data/experience.js.
 * key has to be a stable id, never the array index.
 */
function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.heading}>Experience</h2>

      <ol className={styles.list}>
        {experience.map((job) => (
          <li key={job.id} className={styles.item}>
            <div className={styles.meta}>
              <p className={styles.period}>{job.period}</p>
              <p className={styles.location}>{job.location}</p>
            </div>

            <div className={styles.body}>
              <h3 className={styles.role}>
                {job.role}
                <span className={styles.org}> · {job.org}</span>
              </h3>

              <ul className={styles.highlights}>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* skip the tag row entirely when tools is empty */}
              {job.tools.length > 0 && (
                <ul className={styles.tools}>
                  {job.tools.map((tool) => (
                    <li key={tool} className={styles.tool}>
                      {tool}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
