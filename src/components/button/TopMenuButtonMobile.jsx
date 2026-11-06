import siteLoginActive from '../../assets/icons/site-login-active.png'
import siteLogin from '../../assets/icons/site-login.png'
import siteMenu from '../../assets/icons/site-menu.png'
import './TopMenuButtonMobile.css'

const ICONS = {
  login: { normal: siteLogin, active: siteLoginActive },
  menu: { normal: siteMenu, active: siteMenu },
}

/**
 * icon: 'login'(로그인) | 'menu'(전체메뉴)
 * active: 선택된 상태(Figma의 클릭 상태)
 */
function TopMenuButtonMobile({ icon = 'login', active = false, type = 'button', className = '', children = '로그인', ...props }) {
  const classNames = ['top-menu-button-mobile', active && 'top-menu-button-mobile--active', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classNames} {...props}>
      <img className="top-menu-button-mobile__icon" src={ICONS[icon][active ? 'active' : 'normal']} alt="" />
      {children}
    </button>
  )
}

export default TopMenuButtonMobile
