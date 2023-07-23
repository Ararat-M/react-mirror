import React, { useRef, useState } from 'react'
import styles from "./title.module.css"
import { Modal } from '../../../../Modal'
import { CardModal } from '../../../CardModal'

export function Title() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handelClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setIsModalOpened(true)
  }

  return (
    <>
      <div className={styles.title} onClick={handelClick}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea et consequatur voluptates accusantium molestias numquam? Provident explicabo consequatur quaerat nihil quam dolor commodi quas. Quibusdam temporibus quasi molestias recusandae beatae!
      </div>
      {isModalOpened &&
        (<Modal onClose={() => { setIsModalOpened(false); }}>
          <CardModal />
        </Modal>)
      }
    </>

  )
}

