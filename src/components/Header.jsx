import { profile } from '../data/profile'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.role}>{profile.role}</p>
      <p className={styles.tagline}>{profile.tagline}</p>

      <p className={styles.education}>
        <span className={styles.degree}>{profile.education.degree}</span>
        <span className={styles.school}>{profile.education.school}</span>
        <span className={styles.period}>{profile.education.period}</span>
      </p>

      <div className={styles.actions}>
        {/* download = saves the file instead of opening it in a tab */}
        <a className="btn btn-primary" href={profile.resumeUrl} download>
          Download resume
        </a>

        <ul className={styles.links}>
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
