import styles from './ProjectFilters.module.css'

/**
 * Project filter buttons.
 */

function ProjectFilters({ categories, active, onChange, counts, total }) {
  const options = [{ label: 'All', count: total }].concat(
    categories.map((name) => ({ label: name, count: counts[name] ?? 0 })),
  )

  return (
    <div className={styles.filters} role="group" aria-label="Filter projects">
      {options.map(({ label, count }) => {
        const isActive = active === label
        return (
          <button
            key={label}
            type="button"
            aria-pressed={isActive}
            className={isActive ? `${styles.pill} ${styles.active}` : styles.pill}
            onClick={() => onChange(label)}
          >
            {label}
            <span className={styles.count}>{count}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilters
