import { useState } from 'react'
import { Link } from 'react-router'
import Carousel from './Carousel'
import Trailer from './Trailer'
import styles from './ProjectCard.module.css'

/**
 * Project card for front & project page.
 * The cover plays the trailer right in the card when there is one, otherwise
 * opens the project page once it has links or breakdowns, otherwise the gallery.
 */

function ProjectCard({
  id,
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
  links,
  breakdowns,
  wide = false,
}) {
  const [showGallery, setShowGallery] = useState(false)
  const [playing, setPlaying] = useState(false)
  const images = gallery ?? []
  // a page with only the card's text on it isn't worth the click yet
  const hasPage = (links ?? []).length > 0 || (breakdowns ?? []).length > 0
  const page = hasPage ? `/projects/${id}` : null

  // one image opens as itself; a deck opens as a deck
  const galleryLabel =
    images.length === 1
      ? 'View full size'
      : `View all ${images.length} ${galleryNoun}`

  const cover = <img className={styles.thumb} src={thumbnail} alt="" />

  let coverBlock = <div className={styles.cover}>{cover}</div>
  if (trailer && playing) {
    // the click that swapped this in counts as permission to autoplay
    coverBlock = (
      <div className={styles.cover}>
        <Trailer
          className={`${styles.thumb} ${styles.player}`}
          src={trailer}
          title={title}
          poster={thumbnail}
          autoplay
        />
      </div>
    )
  } else if (!thumbnail) {
    // plain block so the grid doesn't jump
    coverBlock = (
      <div className={`${styles.cover} ${styles.thumbEmpty}`} aria-hidden="true" />
    )
  } else if (trailer) {
    coverBlock = (
      <button
        type="button"
        className={`${styles.cover} ${styles.coverButton}`}
        onClick={() => setPlaying(true)}
        aria-label={`Play the ${title} trailer`}
      >
        {cover}
        <span className={styles.coverHint}>Play trailer</span>
      </button>
    )
  } else if (page) {
    coverBlock = (
      <Link
        className={`${styles.cover} ${styles.coverButton}`}
        to={page}
        aria-label={`Open the ${title} project page`}
      >
        {cover}
        <span className={styles.coverHint}>View project</span>
      </Link>
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
        {status && (
          <p className={`${styles.tool} ${styles.status}`}>{status}</p>
        )}

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

        {(trailer || page || images.length > 1) && (
          <div className={styles.actions}>
            {trailer && (
              <button
                type="button"
                className={styles.linkButton}
                onClick={() => setPlaying(true)}
              >
                Watch the trailer
              </button>
            )}

            {page && (
              <Link className={styles.link} to={page}>
                View project
              </Link>
            )}

            {/* only a real deck gets a button, a single image opens from the cover */}
            {!trailer && !page && images.length > 1 && (
              <button
                type="button"
                className={styles.linkButton}
                onClick={() => setShowGallery(true)}
              >
                {galleryLabel}
              </button>
            )}
          </div>
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
