import SiteIcon from '../icon/SiteIcon.jsx'
import './FooterPopupButton.css'

/**
 * Figma 푸터 팝업 버튼. 눌렀을 때 열리는 목록은 아직 없어서 onClick 등은 그대로 전달한다.
 * 너비는 버튼을 감싸는 부모가 정한다.
 */
function FooterPopupButton({ type = 'button', className = '', children = '정부기관', ...props }) {
  return (
    <button type={type} className={`footer-popup-button ${className}`.trim()} {...props}>
      {children}
      <SiteIcon name="plus" className="footer-popup-button__icon" />
    </button>
  )
}

export default FooterPopupButton
