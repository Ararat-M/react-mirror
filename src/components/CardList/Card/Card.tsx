import React from 'react'
import style from "./card.module.css"
import { TextContent } from './TextContent'
import { Preview } from './Preview'
import { Controls } from './Controls'
import { Menu } from './Menu'

export function Card() {
  return (
    <div className={style.card}>
      <TextContent/>
      <Preview/>
      <Controls/>
      <Menu/>
    </div>
  )
}
