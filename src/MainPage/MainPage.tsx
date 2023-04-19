import Accessory from '../Category/Accessory'
import Digital from '../Category/Digital'
import { MainPageFashion } from '../Category/Fashion'
import CarouselContainer from './CarouselContainer'

const MainPage = () => {
  return (
    <section style={{ background: 'rgb(42, 48, 60)' }}>
      <CarouselContainer />
      <MainPageFashion />
      <Accessory />
      <Digital />
    </section>
  )
}

export default MainPage