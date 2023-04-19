import { Link } from 'react-router-dom'
import styles from './Carousel404.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../Common/Theme'

const Carousel404 = () => {

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "#2a303c" : "white",
    color: isDarkMode ? "#a6adba" : "black",
  } 

  return (
    <section className={styles.Container404} style={themeStyle}>
      <div className={styles.Section404} style={themeStyle}>
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to='/'>
          <span>메인으로</span>
        </Link>
      </div>
    </section>
  )
}

export default Carousel404