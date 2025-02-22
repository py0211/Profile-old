import React from "react"
import styles from './index.module.scss'
import Sider from "../../components/Sider"
import Tip from '../../components/Tip'
import { ReactComponent as GraduationHat } from '../../assets/icons/graduation-hat.svg'
import { ReactComponent as BirthCalendar } from '../../assets/icons/birth-calendar.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import Briefcase from '../../assets/icons/briefcase.svg'
import LightBulb from '../../assets/icons/lightBulb.svg'

const Root = () => {
  return (
    <div className={styles.container}>
      <Sider />
      <div className={styles.main}>
        <Tip>
          <div className={styles.tip}>
            Hi 我是品言 Jessica Chou，擁有3-4年前端開發經驗的工程師，歡迎觀看我的作品集😊
            <div className={styles.info}>
              <span><GraduationHat />中國文化大學 應用數學系 <a>2015-2019</a></span>
              <span><BirthCalendar />1997/02/11 27y</span>
              <span><Phone />0978-361-944</span>
              <span><Email />bi0978361944@gmail.com</span>
            </div>
          </div>
        </Tip>
        <div className={styles.block}>
          <div className={styles.blockTitle}><img src={Briefcase} />工作經歷</div>
          <div></div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockTitle}><img src={LightBulb} />專業技能</div>
        </div>
      </div>
    </div>
  )
}

export default Root
