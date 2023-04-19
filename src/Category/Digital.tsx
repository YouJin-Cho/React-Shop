import { useContext, useEffect, useState } from 'react'
import styles from './Category.module.css'
import { ProductsListType, productsList } from '../Service/products'
import CategoryItems from './CategoryItems'
import { ThemeContext } from '../Common/Theme'
import BreadCrumb from '../Common/BreadCrumb'

const Digital = () => {

  // API 불러오기
  const category = "electronics"
  const [productItems, setproductItems] = useState<any>({
    data: [],
    length: 0
  })

  useEffect(() => {
    (async () => {
      const items = await productsList(category)
      setproductItems(items)
    })()
  }, [])

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "rgb(42, 48, 60)" : "white",
    color: isDarkMode ? "rgb(166, 173, 186)" : "black",
  }

  return (
    <section className={styles.CategoryProductContainer} style={themeStyle}>
      <BreadCrumb />
      <div>
        <h1 className={styles.h1} style={themeStyle}>디지털</h1>
      </div>
      <ul className={styles.ul}>
        {
          productItems.data.map((item:any) => {
            return (
              <CategoryItems key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default Digital