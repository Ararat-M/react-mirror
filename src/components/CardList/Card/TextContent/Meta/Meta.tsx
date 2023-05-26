import React from 'react'
import styles from "./meta.module.css"

export function Meta() {
  return (
    <div className={styles.meta}>
      <span className={styles.name}>дмитрий иванов</span>
      <span className={styles.date}>4 часа назад</span>
    </div>
  )
}
