import React from 'react'
import styles from './index.module.scss'

import Avatar from '../../assets/images/avatar.jpg'
import Menu from '../Menu'

const Sider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.avatar}>
          <img src={Avatar} />
        </div>
        <Menu options={['個人簡介']} />
      </div>
    </div>
  )
}

export default Sider
