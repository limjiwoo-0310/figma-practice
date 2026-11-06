import siteLoginActive from '../../assets/icons/site-login-active.png'
import siteLogin from '../../assets/icons/site-login.png'
import './TopMenuButtonDesktop.css'

/**
 * active: 선택된 상태(Figma의 클릭 상태)
 */
function TopMenuButtonDesktop({ active = false, type = 'button', className = '', children = '로그인', ...props }) {
  const classNames = ['top-menu-button-desktop', active && 'top-menu-button-desktop--active', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classNames} {...props}>
      <img className="top-menu-button-desktop__icon" src={active ? siteLoginActive : siteLogin} alt="" />
      {children}
    </button>
  )
}

export default TopMenuButtonDesktop
