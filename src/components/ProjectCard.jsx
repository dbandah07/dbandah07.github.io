import { useState } from 'react'
import Carousel from './Carousel'
import styles from './ProjectCard.module.css'

/**
 * Project card for front & project page.
 * A project with a gallery opens a carousel when the cover is clicked.
 */

function ProjectCard({
  title,
  year,
  role,
  medium,
  blurb,
  tools,
  link,
  thumbnail,
  gallery,
  galleryNoun = 'images',
  art = false,
}) {
  const [showGallery, setShowGallery] = useState(false)
  const images = gallery ?? []
  const hasGallery = images.length > 0

  // one image opens as itself; a deck opens as a deck
  const galleryLabel =
    images.length === 1
      ? 'View full size'
      : `View ${images.length} ${galleryNoun}`

  // art is portrait, so it gets a taller crop anchored to the top instead of
  // the 16/9 the game covers use
  const cover = (
    <img
      className={art ? `${styles.thumb} ${styles.thumbArt}` : styles.thumb}
      src={thumbnail}
      alt=""
    />
  )

  return (
    <article className={styles.card}>
      {/* placeholder block when there's no thumbnail, so the grid doesn't jump */}
      {!thumbnail && <div className={styles.thumbEmpty} aria-hidden="true" />}

      {thumbnail &&
        (hasGallery ? (
          <button
            type="button"
            className={styles.coverButton}
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
        ) : (
          cover
        ))}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </div>

        {(role || medium) && (
          <p className={styles.role}>{role || medium}</p>
        )}
        {blurb && <p className={styles.blurb}>{blurb}</p>}

        {/* art pieces carry no tool tags, so the row drops out instead of leaving a gap */}
        {(tools ?? []).length > 0 && (
          <ul className={styles.tools}>
            {tools.map((tool) => (
              <li key={tool} className={styles.tool}>
                {tool}
              </li>
            ))}
          </ul>
        )}

        {/* the link only renders when there is one */}
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Link to project →
          </a>
        )}

        {/* only a real deck gets a button, a single image opens from the cover */}
        {!link && images.length > 1 && (
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => setShowGallery(true)}
          >
            {galleryLabel} →
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
