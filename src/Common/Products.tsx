import { Link, useParams } from 'react-router-dom'
import styles from './Products.module.css'
import { useContext, useEffect, useState } from 'react'
import { LocalItem, ProductsListType, productItem } from '../Service/products'
import { CartLocal, saveCartItem } from '../Cart/CartLocal'
import { ThemeContext } from './Theme'
import StarRating from './StarRating'
import BreadCrumb from './BreadCrumb'

const Products = () => {

  // API 불러오기
  const { id } = useParams()
  const itemId = Number(id)
  const [item, setItem] = useState<any>({
    data: [],
    length: 0
  })

  useEffect(() => {
    if(!itemId) {
      return
    }

    (async() => {
      const detailItem = await productItem(itemId)
      setItem({ 
        data: [detailItem.data],
        length: 0
      })
    })()
  }, [itemId])

  // 로컬스토리지
  const handleLocalBtn = () => {
    const items = CartLocal()
    let itemNotSame = false

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === itemId) {
        items[i].count += 1
        itemNotSame = true
        break
      }
    }

    if (!itemNotSame) {
      const newItem: LocalItem = {
        id: itemId,
        count: 1
      }
      items.push(newItem)
    }
    saveCartItem(items)
  }

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(42, 48, 60)" : "white",
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }

  return (
    <section className={styles.productContainer} style={themeStyle}>
      <div>
        <BreadCrumb />
        {
          item.data.map((item:any) => {
            return (
              <div className={styles.productDetail} key={item.id}>
                <div className={styles.productImgBox}>
                  <img className={styles.productImg} src={item.image} />
                </div>
                <div className={styles.productDescription}>
                  <div className={styles.newBadge}>
                    <h2>{item.title}</h2>
                    <span>NEW</span>
                  </div>
                  <p>{item.description}</p>
                  <div className={styles.stars}>
                    <div><StarRating star={item.rating.rate}/></div>
                    <div>{`${item.rating.rate} / ${item.rating.count} 참여`}</div>
                  </div>
                  <p className={styles.price}>{`$${item.price}`}</p>
                  <div className={styles.cartButton}>
                    <button className={styles.cartGet} onClick={handleLocalBtn}>장바구니에 담기</button>
                    <Link to='/cart'>
                      <p className={styles.cartGo}>장바구니로 이동</p>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Products