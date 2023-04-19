import { useContext, useEffect, useState } from 'react'
import styles from './Category.module.css'
import { ProductsListType, productItem } from '../Service/products'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../Common/Theme'

interface ProductsProps {
  id: number
  image: string
  title: string
  price: number
}

const CategoryItems = (props:ProductsProps) => {

  // 상품 상세페이지 이동
  const navigate = useNavigate()
  const [productItemDetail, setproductItemDetail] = useState<ProductsListType>({
    data: [],
    length: 0
  })

  const handleClick = () => {
    const id = props.id
    const newPath = window.location.pathname.replace(/\/(fashion|accessory|digital)/, '')
    if (newPath.startsWith('/')) {
      navigate(`/products/${id}`)
    } else {
      const newUrl = `${window.location.origin}${newPath}/products/${id}`
      return window.location.href = newUrl
    }
  }

  useEffect(() => {
    (async() => {
      const detail = await productItem(props.id)
      setproductItemDetail(detail.data)
    })()
  }, [props.id])

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(55, 65, 81)" : "rgb(243, 244, 246)",
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }

  const borderTopStyle = {
    border: isDarkMode ? '' : '1px solid rgb(229, 231, 235)',
    borderBottom: isDarkMode ? '' : 'none'
  }

  const borderBottomStyle = {
    border: isDarkMode ? '' : '1px solid rgb(229, 231, 235)',
    borderTop: isDarkMode ? '' : 'none'
  }

  return (
    <li className={styles.li} onClick={handleClick} style={themeStyle}>
      <section className={styles.imgSection} style={borderTopStyle}>
        <img className={styles.img} src={props.image} />
      </section>
      <section className={styles.directionSection} style={{...themeStyle, ...borderBottomStyle}}>
        <p className={styles.direction} style={themeStyle}>{props.title}</p>
        <p className={styles.price} style={themeStyle}>{`$${props.price}`}</p>
      </section>
    </li>
  )
}

export default CategoryItems