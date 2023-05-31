import React from 'react'
import style from "./menu.module.css"
import { Dropdown } from '../../../Dropdown'
import { MenuItemList } from './MenuItemList'
import EllipsisIcon from '../../../Icons/EllipsisIcon'


export function Menu() {

  return (
    <div className={style.menu}>
      <Dropdown
        button={
          <button className={style.menuButton}>
            <EllipsisIcon/>
          </button>
        }
      >
        <div className={style.list}>
          <MenuItemList/>
          <button className={style.closeBtn}>
            Закрыть
          </button>
        </div>
      </Dropdown>
    </div>
  )
}
