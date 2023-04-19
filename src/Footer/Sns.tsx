import styles from './Sns.module.css'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { ImFacebook } from 'react-icons/im'

const Sns = () => {
  return (
    <div className={styles.sns}>
      <a href='https://www.facebook.com/0base' target='_blank'><ImFacebook /></a>
      <a href='https://www.instagram.com/zerobase.official' target='_blank'><FiInstagram /></a>
      <a href='https://github.com/YouJin-Cho' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default Sns