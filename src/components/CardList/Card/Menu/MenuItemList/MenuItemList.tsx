import React from 'react'
import style from "./menuItemList.module.css"
import EyeSlashIcon from '../../../../Icons/EyeSlashIcon'
import { WarningIcon } from '../../../../Icons'

export function MenuItemList() {
  return (
    <ul>
      <li>
        <button className={style.itemBtn}>
          <EyeSlashIcon/>
          <span className={style.btnContent}> Скрыть </span>
        </button>
      </li>
      <div className={style.divider}></div>
      <li>
        <button className={style.itemBtn}>
          <WarningIcon/>
          <span className={style.btnContent}> Пожаловаться </span>
        </button>
      </li>
    </ul>
  )
}
