import React from 'react'
import style from "./textContent.module.css"
import { Meta } from './Meta'
import { Title } from './Title'

export function TextContent() {
  return (
    <div className={style.textContent}>
      <Meta/>
      <Title/>
    </div>
  )
}
