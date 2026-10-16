import { profile } from '../data/profile'
import styles from './About.module.css'

// /about. photo and bio live in profile.about
function About() {
  const { headshot, bio } = profile.about

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>About</h1>

      <div className={styles.layout}>
        {headshot ? (
          <img className={styles.photo} src={headshot} alt={profile.name} />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            Headshot
          </div>
        )}

        <div className={styles.bio}>
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p>
            You can find me on{' '}
            {profile.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 && ' and '}
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
            .
          </p>
        </div>
      </div>
    </main>
  )
}

export default About
