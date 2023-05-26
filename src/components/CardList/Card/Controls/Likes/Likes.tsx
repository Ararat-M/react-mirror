import React from 'react'
import style from "./likes.module.css"

export function Likes() {
  return (
    <div>
      <button>
        <svg width="19" height="10" viewBox="0 0 19 10">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
      <span className={style.counter}>246</span>
      <button>
        <svg className={style.down} width="19" height="10" viewBox="0 0 19 10">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
    </div>
  )
}
