import React from 'react'
import styles from "./searchBlock.module.css"
import { Message } from './Message'
import { SearchRow } from './SearchRow'
import { AccountLink } from './AccountLink'

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <AccountLink />
      <SearchRow />
      <Message />
    </div>
  )
}
