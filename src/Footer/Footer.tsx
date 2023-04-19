import { useContext } from 'react'
import Card from './Card'
import styles from './Footer.module.css'
import Sns from './Sns'
import { ThemeContext } from '../Common/Theme'

const Footer = () => {

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(36, 41, 51)" : "rgb(249, 250, 251)",
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }

  return (
    <section className={styles.footer} style={themeStyle}>
      <div>
        <a href='https://zero-base.co.kr/' target='_blank'><span>제로베이스</span></a>
      </div>
       <Card />
       <Sns />
      <div>
        <p className={styles.copyright}>Copyright © 2022 Zero Base</p>
      </div>
    </section>
  )
}

export default Footer