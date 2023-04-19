import axios from "axios"

const remote = axios.create()
const API = 'https://fakestoreapi.com/products/'

export interface ProductsListType {
  data: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }[],
  length: number // 추가
}

export interface CategoryType {
  id: number,
  title: string,
  price: number,
  category: string,
  image: string,
}

export const productsList = async(category:string) => {
  const productsListURL = `${API}category/${category}`
  const response = await remote.get<ProductsListType>(productsListURL)
  return response
}

export const productItem = async(id:number) => {
  const productItemURL = `${API}${id}`
  const detail = await remote.get<ProductsListType>(productItemURL)
  return detail
}

export const productInput = async() => {
  const productInputURL = 'https://fakestoreapi.com/products'
  const input = await remote.get<ItemType>(productInputURL)

  const titles = input.data.map((item:any) => item.title)
  return titles
}

export interface LocalItem {
  id: number
  count: number
}

export interface ItemType {
  map: any
  length: number
  result: ProductsListType[]
}
