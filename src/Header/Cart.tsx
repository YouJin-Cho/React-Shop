import styles from './Cart.module.css'
import { BiMoon } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Common/Theme'
import Input from './Input'

const Cart = () => {

  // 테마 변경
  const { isDarkMode, toggleMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(25, 29, 36)" : "white",
    color: isDarkMode ? "white" : "black",
  }

  return ( 
    <div className={styles.section} style={themeStyle}>
      <label>
        <button className={styles.themeIcon}>
          {isDarkMode ? <FiSun style={{ color: 'white' }} onClick={toggleMode}/> : <BiMoon onClick={toggleMode}/>}
        </button>
      </label>
      <div>
        <Input />
      </div>
      <div>
        <span>
          <div className={styles.badge}>
            <Link to='/cart'>
              <BsHandbag />
              <span className={styles.count} style={{ color: 'white' }}>0</span>
            </Link>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Cart