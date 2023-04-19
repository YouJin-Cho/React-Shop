import styles from './StarRating.module.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

interface StarRatingProps {
  star: number
}

const StarRating: React.FC<StarRatingProps> = ({ star }) => {
  const roundedRating = Math.floor(star)
  const halfStar = star - roundedRating >= 0.5

  return (
    <div className={styles.starContainer}>
      {
        Array(roundedRating).fill(null).map((_, index) => (
          <span key={index} className={styles.starsFill}>
            <BsStarFill />
          </span>
        ))
      }
      {
        halfStar && (
          <span className={styles.starsFill}>
            <BsStarHalf />
          </span>
        )
      }
      {
        Array(5 - roundedRating - (halfStar ? 1 : 0)).fill(null).map((_, index) => (
          <span key={index} className={styles.starsNone}>
            <BsStar />
          </span>
        ))
      }
    </div>
  )
}

export default StarRating