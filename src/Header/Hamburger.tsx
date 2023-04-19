import { Link } from 'react-router-dom'
import styles from './Hamburger.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../Common/Theme'

interface HamburgerProps {
  closeHamburger: () => void
  ishamburgerOpen: boolean
}

const Hamburger = (props:HamburgerProps) => {

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "#181d25" : "#f4f4f4",
    color: isDarkMode ? "white" : "black",
  }

  const handleHamburgerRemove = () => {
    props.closeHamburger()
  }

  return (
    <div className={styles.fullContainer} onClick={handleHamburgerRemove}>
      <div className={styles.hamburgerContainer} style={{...themeStyle, visibility: props.ishamburgerOpen ? 'visible' : 'hidden'}}>
        <ul className={styles.hamburgerUl} style={{...themeStyle}}>
          <Link to='/fashion' className={styles.li}>
            <li onClick={handleHamburgerRemove}>
              패션
            </li>
          </Link>
          <Link to='/Accessory' className={styles.li}>
            <li onClick={handleHamburgerRemove}>
              액세서리
            </li>
          </Link>
          <Link to='/Digital' className={styles.li}>
            <li onClick={handleHamburgerRemove}>
              디지털
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Hamburger