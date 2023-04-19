import { Carousel } from 'react-responsive-carousel'
import styles from './CarouselContainer.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Common/Theme'

const CarouselContainer = () => {

  // 테마 변경
  const { isDarkMode } = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: isDarkMode ? "#252931" : "rgb(62, 68, 81)",
    color: isDarkMode ? "#a6adba" : "white",
  }

  return (
    <Carousel 
      autoPlay={true} 
      infiniteLoop={true}
      showThumbs={false} 
      showStatus={false}
    >
      <div className={styles.CarouselContainer}>
        <img className={styles.carouselImg}
          src="../../public/carouselImg/img_shop_fashion.jpeg" 
          height='700px'
          width='1920px'
          alt="digital" />
        <div className={styles.carouselDescription}>
          <h2>물빠진 청바지!</h2>
          <p>이제 막 도착한 패션 청바지를 구경해 보세요.</p>
          <Link to = '/fashion'>
            <p className={styles.go} style={themeStyle}>바로가기 →</p>
          </Link>
        </div>
      </div>
      <div className={styles.CarouselContainer}>
        <img className={styles.carouselImg}
          src="../../public/carouselImg/img_shop_digital.jpeg" 
          height='700px'
          width='1920px'
          alt="digital" />
        <div className={styles.carouselDescription}>
          <h2>신속한 업무처리!</h2>
          <p>다양한 디지털 상품을 둘러보세요.</p>
          <Link to = '/digital'>
            <p className={styles.go} style={themeStyle}>바로가기 →</p>
          </Link>
        </div>
      </div>
      <div className={styles.CarouselContainer}>
        <img className={styles.carouselImg}
          src="../../public/carouselImg/img_shop_grocery.jpeg" 
          height='700px'
          width='1920px'
          alt="digital" />
        <div className={styles.carouselDescription}>
          <h2>신선한 식품!</h2>
          <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p>
          <Link to = '/grocery'>
            <p className={styles.go} style={themeStyle}>바로가기 →</p>
          </Link>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselContainer



