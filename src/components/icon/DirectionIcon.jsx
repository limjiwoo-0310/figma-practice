import right from '../../assets/icons/arrow-right.png'
import categoryDown from '../../assets/icons/category-arrow-down.png'
import categoryLeft from '../../assets/icons/category-arrow-left.png'
import categoryRight from '../../assets/icons/category-arrow-right.png'
import categoryUp from '../../assets/icons/category-arrow-up.png'
import down from '../../assets/icons/direction-down.png'
import left from '../../assets/icons/direction-left.png'
import up from '../../assets/icons/direction-up.png'
import './DirectionIcon.css'

const IMAGES = {
  default: { left, right, up, down },
  category: { left: categoryLeft, right: categoryRight, up: categoryUp, down: categoryDown },
}

/**
 * direction: 'left' | 'right' | 'up' | 'down'
 * variant: 'default'(방향아이콘, 꺾쇠) | 'category'(방향아이콘-카테고리, 채워진 삼각형)
 * 장식용 그림이라 alt는 비워 둔다. 버튼 안에 넣으면 버튼에 aria-label을 적는다.
 */
function DirectionIcon({ direction = 'left', variant = 'default', className = '', ...props }) {
  return (
    <img
      className={`direction-icon direction-icon--${variant} ${className}`.trim()}
      src={IMAGES[variant][direction]}
      alt=""
      {...props}
    />
  )
}

export default DirectionIcon
