import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import Products from '../Common/Products'
import CartPage from '../Cart/CartPage'
import Carousel404 from './Carousel404'
import Fashion from '../Category/Fashion'
import Accessory from '../Category/Accessory'
import Digital from '../Category/Digital'

const MainContainer = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/grocery' element={<Carousel404 />} />
      <Route path='/products/:id' element={<Products />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/fashion' element={<Fashion />} />
      <Route path='/accessory' element={<Accessory />} />
      <Route path='/digital' element={<Digital />} />
    </Routes>
  )
}

export default MainContainer