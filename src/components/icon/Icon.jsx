import attendance from '../../assets/images/menu-attendance.png'
import donation from '../../assets/images/menu-donation.png'
import employment from '../../assets/images/menu-employment.png'
import loan from '../../assets/images/menu-loan.png'
import mentoring from '../../assets/images/menu-mentoring.png'
import scholarship from '../../assets/images/menu-scholarship.png'
import terms from '../../assets/images/menu-terms.png'
import voucher from '../../assets/images/menu-voucher.png'
import './Icon.css'

const IMAGES = { scholarship, loan, terms, mentoring, attendance, donation, voucher, employment }

/**
 * name: scholarship | loan | terms | mentoring | attendance | donation | voucher | employment
 * size: 'default'(IconMenu용) | 'small'(LoginBarDesktop용)
 * 옆에 글자가 함께 나오는 장식용 그림이라 alt는 비워 둔다.
 */
function Icon({ name, size = 'default', className = '' }) {
  return <img className={`icon icon--${size} ${className}`.trim()} src={IMAGES[name]} alt="" />
}

export default Icon
