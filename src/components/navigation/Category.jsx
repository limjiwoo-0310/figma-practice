import arrowRight from '../../assets/icons/arrow-right.png'
import './Category.css'

/**
 * 다른 페이지로 이동하는 링크. 주소는 href로 넘기며, 아직 연결된 주소는 없다.
 * 너비는 감싸는 부모가 정한다.
 */
function Category({ href = '#', className = '', children = '1. 신청동의 및 서약', ...props }) {
  return (
    <a className={`category ${className}`.trim()} href={href} {...props}>
      <span className="category__title">{children}</span>
      <img className="category__icon" src={arrowRight} alt="" />
    </a>
  )
}

export default Category
