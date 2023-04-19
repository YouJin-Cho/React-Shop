import { useContext } from 'react'
import styles from './Modal.module.css'
import { ThemeContext } from '../Common/Theme'

interface ModalProps {
  closeModal: () => void
  isModalOpen: boolean
}

const Modal = (props:ModalProps) => {

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "#181d25" : "#f4f4f4",
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }

  const themeFont = {
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }

  const handleAllRemove = () => {
    localStorage.removeItem('CART_ITEM')
    props.closeModal()
  }

  return (
    <div className={styles.modalContainer} style={{ visibility: props.isModalOpen ? 'visible' : 'hidden'}}>
      <div className={styles.modalBox} style={themeStyle}>      
        <h3>정말로 구매하시겠습니까?</h3>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className={styles.label}  style={themeFont}>
          <span onClick={handleAllRemove}>네</span>
          <span onClick={props.closeModal}>아니오</span>
        </div>
      </div>
    </div>
  )
}

export default Modal