import React from 'react'
import styles from "./searchRow.module.css"

export function SearchRow() {
  return (
    <div>
      <input className={styles.searchRowInput} type="text" placeholder='Поиск'/>
    </div>
  )
}
