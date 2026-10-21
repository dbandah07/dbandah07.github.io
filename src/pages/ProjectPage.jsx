import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { projects } from '../data/projects'
import Carousel from '../components/Carousel'
import YouTube from '../components/YouTube'
import styles from './ProjectPage.module.css'

// gifs and stills are plain images. a clip loops silently like a gif,
// unless the visitor asked for less motion, then it waits for play
function Media({ src, alt }) {
  if (/\.(mp4|webm)$/i.test(src)) {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return (
      <video
        className={styles.media}
        src={src}
        aria-label={alt}
        muted
        loop
        playsInline
        autoPlay={!still}
        controls={still}
      />
    )
  }
  return <img className={styles.media} src={src} alt={alt} />
}

// **double stars** in breakdown text -> bold
function withBold(text) {
  return text
    .split(/\*\*(.+?)\*\*/)
    .map((chunk, i) => (i % 2 ? <strong key={i}>{chunk}</strong> : chunk))
}

// /projects/<id>. trailer and quick facts up top, then the overview from the
// card, then the breakdowns. anything a project doesn't have drops out
function ProjectPage() {
  const { id } = useParams()
  const [showGallery, setShowGallery] = useState(false)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className={styles.page}>
        <Link to="/projects" className={styles.back}>
          ← All projects
        </Link>
        <h1 className={styles.title}>Nothing here</h1>
        <p className={styles.missing}>That project doesn’t exist, or it moved.</p>
      </main>
    )
  }

  const {
    title,
    year,
    role,
    status,
    summary,
    contribution,
    tools,
    trailer,
    thumbnail,
    gallery,
    galleryNoun = 'images',
    engine,
    team,
    duration,
    links,
    codeNote,
    breakdowns,
  } = project

  const images = gallery ?? []

  const facts = [
    ['Role', role],
    ['Team', team],
    ['Duration', duration],
    ['Engine', engine],
    ['Year', year],
  ].filter(([, value]) => value)

  let hero = <div className={`${styles.cover} ${styles.empty}`} aria-hidden="true" />
  if (trailer) {
    hero = <YouTube className={styles.cover} link={trailer} title={title} />
  } else if (thumbnail) {
    hero = <img className={styles.cover} src={thumbnail} alt="" />
  }

  return (
    <main className={styles.page}>
      <Link to="/projects" className={styles.back}>
        ← All projects
      </Link>

      <h1 className={styles.title}>{title}</h1>
      {status && <p className={styles.status}>{status}</p>}

      <div className={styles.hero}>
        {hero}

        <div>
          {facts.length > 0 && (
            <dl className={styles.facts}>
              {facts.map(([label, value]) => (
                <div key={label} className={styles.fact}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {/* play and code links first, the deck button after them */}
          {((links ?? []).length > 0 || images.length > 1) && (
            <div className={styles.actions}>
              {(links ?? []).map((link, i) => (
                <a
                  key={link.label}
                  className={i === 0 ? 'btn btn-primary' : 'btn'}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
              {images.length > 1 && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowGallery(true)}
                >
                  View all {images.length} {galleryNoun}
                </button>
              )}
            </div>
          )}

          {codeNote && <p className={styles.note}>{codeNote}</p>}

          {(tools ?? []).length > 0 && (
            <ul className={styles.tools}>
              {tools.map((tool) => (
                <li key={tool} className={styles.tool}>
                  {tool}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {(summary || contribution) && (
        <section className={styles.section}>
          <h2 className={styles.heading}>Overview</h2>
          {summary && <p className={styles.summary}>{summary}</p>}
          {contribution && <p className={styles.contribution}>{contribution}</p>}
        </section>
      )}

      {(breakdowns ?? []).length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.heading}>Breakdowns</h2>

          <div className={styles.breakdowns}>
            {breakdowns.map((part) => (
              <article
                key={part.title}
                className={
                  part.media
                    ? styles.breakdown
                    : `${styles.breakdown} ${styles.textOnly}`
                }
              >
                {part.media && (
                  <figure className={styles.figure}>
                    <Media src={part.media} alt={part.mediaAlt ?? part.title} />
                    {part.caption && (
                      <figcaption className={styles.caption}>
                        {part.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                <div className={styles.text}>
                  <h3 className={styles.partTitle}>{part.title}</h3>

                  {part.body && <p className={styles.body}>{withBold(part.body)}</p>}
                  {(part.points ?? []).length > 0 && (
                    <ul className={styles.points}>
                      {part.points.map((point) => (
                        <li key={point}>{withBold(point)}</li>
                      ))}
                    </ul>
                  )}

                  {part.code && (
                    <a
                      className={styles.link}
                      href={part.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {showGallery && (
        <Carousel
          images={images}
          title={title}
          onClose={() => setShowGallery(false)}
        />
      )}
    </main>
  )
}

export default ProjectPage
