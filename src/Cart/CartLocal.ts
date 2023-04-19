import { LocalItem } from "../Service/products"

export const saveCartItem = (items:LocalItem[]) => {
  localStorage.setItem('CART_ITEM', JSON.stringify(items))
}

export const CartLocal = () => {
  const itemJson = localStorage.getItem('CART_ITEM')

  if(!itemJson) {
    return []
  }

  try {
    return JSON.parse(itemJson)
  } catch (e) {
    console.error(e)
    return []
  }
}
