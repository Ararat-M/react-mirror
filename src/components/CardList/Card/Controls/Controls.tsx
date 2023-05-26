import React from 'react'
import style from "./controls.module.css"
import { Likes } from './Likes'
import { Comments } from './Comments'

export function Controls() {
  return (
    <div className={style.controls}>
      <Likes/>
      <Comments/>
    </div>
  )
}
