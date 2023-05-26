import React from 'react'
import styles from "./content.module.css"
import { CardList } from '../CardList'

export function Content() {
  return (
    <div className={styles.content}>
      <CardList/>
    </div>
  )
}
