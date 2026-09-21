import { profile } from '../data/profile'
import styles from './Header.module.css'

/**
 * Top of the page: name, role, and the two main buttons.
 *
 * styles is a CSS Module -- keys are the class names in Header.module.css,
 * renamed at build time so they can't collide with other files.
 */
function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{profile.role}</p>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.tagline}>{profile.tagline}</p>

      <div className={styles.actions}>
        {/* download = save the file instead of opening it in a tab */}
        <a className="btn btn-primary" href={profile.resumeUrl} download>
          Download resume
        </a>
        <a className="btn" href="#projects">
          View work
        </a>
      </div>

      <ul className={styles.links}>
        {profile.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
