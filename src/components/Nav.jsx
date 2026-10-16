import { Link, NavLink } from 'react-router'
import { profile } from '../data/profile'
import styles from './Nav.module.css'

// initials for small screens, where the full name crowds the links
const initials = profile.name
  .split(/[\s-]+/)
  .map((part) => part[0])
  .join('')

// top bar on every page. Portfolio is a hash link, App scrolls to it.
function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <Link to="/" className={styles.home} aria-label={`${profile.name}, home`}>
        <span className={styles.full}>{profile.name}</span>
        <span className={styles.short}>{initials}</span>
      </Link>

      <ul className={styles.links}>
        <li>
          <Link to="/#portfolio">Portfolio</Link>
        </li>
        <li>
          {/* NavLink sets aria-current on /about, the css keys off that */}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
