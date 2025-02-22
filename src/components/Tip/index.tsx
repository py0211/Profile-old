import React from 'react'
import styles from './index.module.scss'

type Props = {
  children: React.ReactNode
}

const Tip = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      {children}
    </div>
  )
}

export default Tip