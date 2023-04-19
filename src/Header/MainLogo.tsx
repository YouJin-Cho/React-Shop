import { Link } from 'react-router-dom'
import styles from './MainLogo.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import Hamburger from './Hamburger'

const MainLogo = () => {

  // 로고 옆 햄버거창
  const [ishamburgerOpen, setIshamburgerOpen] = useState(false)

  const handlehamburgerButton = () => {
    setIshamburgerOpen(true)
  }

  const closeHamburger = () => {
    setIshamburgerOpen(false)
  }

  return (
    <div className={styles.logoSection}>
      <GiHamburgerMenu className={styles.hamburger} onClick={handlehamburgerButton}/>
      {ishamburgerOpen && (
        <Hamburger ishamburgerOpen={ishamburgerOpen} closeHamburger={closeHamburger} /> 
      )}
      <Link to ='/'>
        <h1 className={styles.h1}>React Shop</h1>
      </Link>
    </div>
  )
}

export default MainLogo