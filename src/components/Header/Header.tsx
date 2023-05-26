import React from 'react'
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { Sort } from './Sort';

export function Header() {
  return (
    <div>
      <SearchBlock/>
      <ThreadTitle/>
      <Sort/>
    </div>
  )
}
