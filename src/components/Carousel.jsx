import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Carousel.module.css'

// Fullscreen gallery, opened from ProjectCard or a project page. Esc closes, arrows move.
// Portalled to body because the card clips with overflow: hidden and grows a
// transform on hover, which would trap position: fixed inside it.
function Carousel({ images, title, onClose }) {
  const [index, setIndex] = useState(0)
  const closeRef = useRef(null)

  const count = images.length
  // wraps both ways, so the last card steps forward to the first
  const step = useCallback(
    (delta) => setIndex((i) => (i + delta + count) % count),
    [count],
  )

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    // the page behind stays put while this is open
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose, step])

  // focus lands on the close button so the whole thing is keyboard-reachable
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      onClick={onClose}
    >
      {/* the panel swallows the click so only the backdrop closes */}
      <div className={styles.panel} onClick={(event) => event.stopPropagation()}>
        <div className={styles.bar}>
          <p className={styles.count}>
            {index + 1} / {count}
          </p>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close gallery"
          >
            ✕
          </button>
        </div>

        <div className={styles.stage}>
          <button
            type="button"
            className={styles.nav}
            onClick={() => step(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            className={styles.image}
            src={images[index]}
            alt={`${title} card ${index + 1} of ${count}`}
          />

          <button
            type="button"
            className={styles.nav}
            onClick={() => step(1)}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={i === index ? `${styles.dot} ${styles.dotOn}` : styles.dot}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default Carousel
