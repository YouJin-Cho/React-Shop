import { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { ThemeContext } from '../Common/Theme'
import axios from "axios"
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Input = () => {

  // input search 기능
  const [searchTerm, setSearchTerm] = useState("")
  const [productTitles, setProductTitles] = useState<string[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProductTitles = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        const products = response.data
        const filteredTitles = products
          .filter((product: { title: string | string[] }) => product.title.includes(searchTerm))
          .map((product: { title: any }) => product.title)
        setProductTitles(filteredTitles)
      } catch (error) {
        console.error("API 호출 실패..", error)
        setProductTitles([])
      }
    }
    fetchProductTitles()
  }, [searchTerm])

  // input창
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // 해당 title 클릭 -> 페이지 이동
  const handleTitleClick = async (title: string) => {
    try {
      const response:any = await axios.get("https://fakestoreapi.com/products")
      const products = response.data
      const product = products.find((product: { title: string }) => product.title === title)

      if (product) {
        const productId = product.id
        navigate(`/products/${productId}`)
        setSearchTerm('')
      }
    } catch (error) {
      console.error("API 호출 실패..", error)
    }
  }

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)
  
  const themeInput = {
    backgroundColor: isDarkMode ? "#4b5563" : "#d1d5db",
    color: isDarkMode ? 'white' : 'black'
  }

  const themeInputUl = {
    backgroundColor: isDarkMode ? "#4b5563" : "#ffffff",
    color: isDarkMode ? 'white' : 'black'
  }

  return (
    <>
      <input 
        type="text" 
        className={styles.cartInput} 
        value={searchTerm}
        placeholder={'검색'}
        onChange={handleInputChange} 
        style={themeInput}>
      </input>   
      {searchTerm !== "" && productTitles.length > 0 && ( 
        <ul className={styles.inputUl} style={themeInputUl}>
          {productTitles.map(title => (
            <li key={title} onClick={() => handleTitleClick(title)}>
              {title}
            </li>
          ))}
        </ul>
      )}
      <BsSearch className={styles.search}/>
    </>
  )
}

export default Input