import { useState } from 'react'
import Carousel from './Carousel'
import styles from './ProjectCard.module.css'

/**
 * Project card for front & project page.
 * The cover opens the trailer when there is one, otherwise the gallery.
 */

function ProjectCard({
  title,
  year,
  role,
  summary,
  contribution,
  tools,
  trailer,
  thumbnail,
  gallery,
  galleryNoun = 'images',
  wide = false,
}) {
  const [showGallery, setShowGallery] = useState(false)
  const images = gallery ?? []

  // one image opens as itself; a deck opens as a deck
  const galleryLabel =
    images.length === 1
      ? 'View full size'
      : `View all ${images.length} ${galleryNoun}`

  const cover = <img className={styles.thumb} src={thumbnail} alt="" />

  // always wrapped, so the wide card can give the cover half the row
  let coverBlock = <div className={styles.cover}>{cover}</div>
  if (!thumbnail) {
    // plain block so the grid doesn't jump
    coverBlock = (
      <div className={`${styles.cover} ${styles.thumbEmpty}`} aria-hidden="true" />
    )
  } else if (trailer) {
    coverBlock = (
      <a
        className={`${styles.cover} ${styles.coverButton}`}
        href={trailer}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch the ${title} trailer on YouTube`}
      >
        {cover}
        <span className={styles.coverHint}>Watch trailer</span>
      </a>
    )
  } else if (images.length > 0) {
    coverBlock = (
      <button
        type="button"
        className={`${styles.cover} ${styles.coverButton}`}
        onClick={() => setShowGallery(true)}
        aria-label={
          images.length === 1
            ? `Open ${title} full size`
            : `Open ${title} gallery, ${images.length} images`
        }
      >
        {cover}
        <span className={styles.coverHint}>{galleryLabel}</span>
      </button>
    )
  }

  return (
    <article className={wide ? `${styles.card} ${styles.wide}` : styles.card}>
      {coverBlock}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </div>

        {role && <p className={styles.role}>{role}</p>}

        {/* what the game is, then what i did on it */}
        {summary && <p className={styles.summary}>{summary}</p>}
        {contribution && <p className={styles.contribution}>{contribution}</p>}

        {(tools ?? []).length > 0 && (
          <ul className={styles.tools}>
            {tools.map((tool) => (
              <li key={tool} className={styles.tool}>
                {tool}
              </li>
            ))}
          </ul>
        )}

        {trailer && (
          <a
            className={styles.link}
            href={trailer}
            target="_blank"
            rel="noreferrer"
          >
            Watch the trailer
          </a>
        )}

        {/* only a real deck gets a button, a single image opens from the cover */}
        {!trailer && images.length > 1 && (
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => setShowGallery(true)}
          >
            {galleryLabel}
          </button>
        )}
      </div>

      {showGallery && (
        <Carousel
          images={images}
          title={title}
          onClose={() => setShowGallery(false)}
        />
      )}
    </article>
  )
}

export default ProjectCard
