import TopMenuButtonMobile from './TopMenuButtonMobile.jsx'
import './MenuButton.css'

/**
 * Figma 메뉴버튼. 모바일 헤더의 로그인, 전체메뉴 버튼 묶음이다.
 * onLogin, onMenu: 각 버튼을 눌렀을 때 실행할 함수
 */
function MenuButton({ onLogin, onMenu, className = '', ...props }) {
  return (
    <div className={`menu-button ${className}`.trim()} {...props}>
      <TopMenuButtonMobile onClick={onLogin}>로그인</TopMenuButtonMobile>
      <TopMenuButtonMobile icon="menu" onClick={onMenu}>
        전체메뉴
      </TopMenuButtonMobile>
    </div>
  )
}

export default MenuButton
