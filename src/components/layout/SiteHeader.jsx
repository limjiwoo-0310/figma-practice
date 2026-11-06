import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'
import MenuButton from '../button/MenuButton.jsx'
import SiteMoveButtonDesktop from '../navigation/SiteMoveButtonDesktop.jsx'
import './SiteHeader.css'

/**
 * Figma 사이트상단헤더. 모바일은 로고와 메뉴 버튼, 데스크탑은 사이트 이동 링크와 로고다.
 * desktopOnly: 모바일에서 숨긴다. 신청 화면의 모바일 프레임에는 헤더가 없다.
 */
function SiteHeader({ desktopOnly = false, className = '', ...props }) {
  const classNames = ['site-header', desktopOnly && 'site-header--desktop-only', className].filter(Boolean).join(' ')

  return (
    <header className={classNames} {...props}>
      <SiteMoveButtonDesktop className="site-header__links" />
      <div className="site-header__bar">
        <Link className="site-header__logo" to="/" aria-label="한국장학재단 메인으로">
          <img src={logo} alt="" />
        </Link>
        <MenuButton className="site-header__menu" />
      </div>
    </header>
  )
}

export default SiteHeader
