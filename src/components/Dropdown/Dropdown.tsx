import React, { useState } from 'react'
import style from "./dropdown.module.css"

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
}


export function Dropdown({ button, children}: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handlerClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  
  return (
    <div className={style.container}>
      <div onClick={handlerClick}>
        {button}
      </div>
      {isOpen && (
        <div className={style.listContainer}>
          <div className={style.list}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
