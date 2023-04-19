import { useContext, useEffect, useState } from "react"
import { ProductsListType, productsList } from "../Service/products"
import styles from './Category.module.css'
import CategoryItems from "./CategoryItems"
import { ThemeContext } from "../Common/Theme"
import BreadCrumb from "../Common/BreadCrumb"

const Fashion = () => {

  // API 불러오기
  const [productItems, setProductItems] = useState<any>({
    data: [],
    length: 0
  })

  useEffect(() => {
    (async () => {
      const menItems:any = await productsList("men's clothing")
      const womenItems:any = await productsList("women's clothing")
      const combinedItems = [...menItems.data, ...womenItems.data]
      setProductItems({
        data: combinedItems,
        length: 0
      })
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
        <h1 className={styles.h1} style={themeStyle}>패션</h1>
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

// category: mens만 가져오기 
export const MainPageFashion = () => {

  const category = "men's clothing"
  const [productItems, setProductItems] = useState<any>({
    data: [],
    length:0
  })

  useEffect(() => {
    (async () => {
      const items = await productsList(category)
      setProductItems(items)
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
      <div>
        <h1 className={styles.h1} style={themeStyle}>패션</h1>
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

export default Fashion