import { LocalItem } from '../Service/products';
import { CartLocal } from './CartLocal';
import styles from './CartPage.module.css'

interface CartButtonProps {
  id: number
}

const CartButton = (props:CartButtonProps) => {

  // '+'버튼 -> count 1 증가
  const handleIncrement = (id: number) => {
    const items = CartLocal();
    const item = items.find((item: LocalItem) => item.id === id);
    if (item) {
      item.count += 1;
      localStorage.setItem("CART_ITEM", JSON.stringify(items));
    }
  };

  // '-' 버튼 -> count -1 감소
  const handleDecrement = (id: number) => {
    const items = CartLocal();
    const item = items.find((item: LocalItem) => item.id === id);
    if (item && item.count > 0) {
      item.count -= 1;
      localStorage.setItem("CART_ITEM", JSON.stringify(items));
    }
  };

  return (
    <>
      <button onClick={() => handleDecrement(props.id)}>-</button>
      <button className={styles.count}>1</button>
      <button onClick={() => handleIncrement(props.id)}>+</button>
    </>
  )
}

export default CartButton