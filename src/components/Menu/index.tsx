import React from 'react'
import styles from './index.module.scss'

type Props = {
  options: string[]
}

const Menu = ({ options }: Props) => {
  return (
    <div className={styles.menu}>
      {options.map((item) =>
        <div className={styles.menuItem} key={item}>
          <div />
          個人簡介
        </div>
      )}
    </div>
  )
}

export default Menu