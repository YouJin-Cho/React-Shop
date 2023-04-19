import { Link } from 'react-router-dom'
import styles from './Tabs.module.css'

const Tabs = () => {
  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabs}>
        <li className={styles.tab}>
          <Link to='/fashion'>
            <span>패션</span>
          </Link>
        </li>
        <li className={styles.tab}>
          <Link to='/accessory'>
            <span>액세서리</span>
          </Link>
        </li>
        <li className={styles.tab}>
          <Link to='/digital'>
            <span>디지털</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Tabs