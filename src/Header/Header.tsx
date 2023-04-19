import { useContext, useEffect, useState } from 'react'
import Cart from './Cart'
import styles from './Header.module.css'
import MainLogo from './MainLogo'
import Tabs from './Tabs'
import cx from 'clsx'
import { ThemeContext } from '../Common/Theme'

const Header = () => {

  // 헤더 고정
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsSticky(scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(25, 29, 36)" : "white",
    color: isDarkMode ? "white" : "black",
  }

  return (
    <div 
      className={isSticky ? cx(styles.navbar, styles.sticky) : styles.navbar}
      style={themeStyle}>
      <MainLogo />
      <Tabs />
      <Cart />
    </div>
  )
}

export default Header