import { Link } from 'react-router-dom'
import styles from './CartPage.module.css'
import Modal from './Modal'
import { useContext, useEffect, useState } from 'react'
import { CartLocal } from './CartLocal'
import { ProductsListType, productItem } from '../Service/products'
import { ThemeContext } from '../Common/Theme'
import CartButton from './CartButton'
import BreadCrumb from '../Common/BreadCrumb'

const CartPage = () => {

  // 모달창
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBuyButton = () => {
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // 로컬스토리지
  const localCartItems = CartLocal()
  const [productDetails, setProductDetails] = useState<ProductsListType>({
    data: [],
    length: 0
  })

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productDetails = await Promise.all(localCartItems.map(async (item:any) => {
        const detailItem = await productItem(item.id)
        return detailItem
      }))
      setProductDetails({
        data: productDetails,
        length: productDetails.length
      })
    }
  
    fetchProductDetails()
  }, [])

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(42, 48, 60)" : "white",
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }
  
  return (
    <section className={styles.cartContainer} style={themeStyle}>
      <BreadCrumb />
      {
        localCartItems.length === 0 ? 
        (
          <section className={styles.cartNoneContainer} style={themeStyle}>
            <div className={styles.cartSection}>
              <div>
                <h1 className={styles.cartNone}>장바구니에 물품이 없습니다.</h1>
                <Link to='/'>
                  <span className={styles.button}>담으러 가기</span>
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.cartPrice}>
                <span className={styles.all}>총 : $0</span>
                <span className={styles.button} onClick={handleBuyButton}>구매하기</span>
              </div>
            </div>
          </section>
        ) : (
          <div className={styles.cartContainer} style={themeStyle}>
            {
              productDetails && productDetails.length > 0 ? (
                productDetails.data.map((item:any) => (
                  <div className={styles.productDetail} key={item.data.id}>
                    <div className={styles.productImgBox}>
                      <img className={styles.productImg} src={item.data.image}/>
                    </div>
                    <div className={styles.choiceBox}>
                      <h2>{item.data.title}</h2>
                      <p className={styles.price}>${item.data.price}</p>
                      <div className={styles.productDetail}>
                        <div className={styles.plusminusBtn}>
                          <CartButton id={item.id}/>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                  <div>Loading...</div>
              )
            }
            <div className={styles.cartPrice}>
              <span className={styles.all}>총 : $0</span>
              <span className={styles.button} onClick={handleBuyButton}>구매하기</span>
            </div>
          </div>
        )
      }
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} /> 
      )}
    </section>
  )
}

export default CartPage