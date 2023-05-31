import React from 'react'
import style from "./comments.module.css"
import { CommentsIcon } from '../../../../Icons'

export function Comments() {
  return (
    <div>
      <button>
        <CommentsIcon/>
        <span>27</span>
      </button>
    </div>
  )
}
