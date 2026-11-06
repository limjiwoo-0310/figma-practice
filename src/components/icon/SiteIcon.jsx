import backTitle from '../../assets/icons/site-back-title.png'
import back from '../../assets/icons/site-back.png'
import close from '../../assets/icons/site-close.png'
import externalMeta from '../../assets/icons/site-external-meta.png'
import external from '../../assets/icons/site-external.png'
import help from '../../assets/icons/site-help.png'
import login from '../../assets/icons/site-login.png'
import menu from '../../assets/icons/site-menu.png'
import plus from '../../assets/icons/site-plus.png'
import searchPrimary from '../../assets/icons/site-search-primary.png'
import search from '../../assets/icons/site-search.png'
import './SiteIcon.css'

const IMAGES = {
  login,
  menu,
  external,
  close,
  help,
  search,
  back,
  plus,
  'search-primary': searchPrimary,
  'external-meta': externalMeta,
  'back-title': backTitle,
}

/**
 * name: login | menu | external(외부이동) | close(창닫기) | help(설명) | search(찾기) | back(뒤로가기) | plus
 * 색이 다른 그림: search-primary(파란 찾기) | external-meta(회색 외부이동, 20px) | back-title(진한 뒤로가기)
 * 장식용 그림이라 alt는 비워 둔다. 버튼 안에 넣으면 버튼에 aria-label을 적는다.
 */
function SiteIcon({ name = 'login', className = '', ...props }) {
  return <img className={`site-icon site-icon--${name} ${className}`.trim()} src={IMAGES[name]} alt="" {...props} />
}

export default SiteIcon
