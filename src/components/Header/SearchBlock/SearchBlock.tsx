import React from 'react'
import styles from "./searchBlock.module.css"
import { Message } from './Message'
import { SearchRow } from './SearchRow'

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      accountIcon
      <SearchRow />
      <Message />
    </div>
  )
}
