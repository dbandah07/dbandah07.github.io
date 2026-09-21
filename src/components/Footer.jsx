import { profile } from '../data/profile'
import styles from './Footer.module.css'

/**
 * Bottom of the page: rights and contact.
 * getFullYear() keeps the copyright year current automatically.
 */
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.rights}>
        © {year} {profile.name}. All rights reserved.
      </p>

      <a className={styles.contact} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </footer>
  )
}

export default Footer
