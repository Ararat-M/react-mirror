import React from 'react'
import style from "./likes.module.css"
import { VectorIcon } from '../../../../Icons'

export function Likes() {
  return (
    <div>
      <button>
        <VectorIcon/>
      </button>
      <span className={style.counter}>246</span>
      <button className={style.down}>
        <VectorIcon/>
      </button>
    </div>
  )
}
