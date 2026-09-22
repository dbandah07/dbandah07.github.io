import { profile } from '../data/profile'
import styles from './Footer.module.css'

/**
 * Footer with copyright and contact info. Stays at the bottom of the page.
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
