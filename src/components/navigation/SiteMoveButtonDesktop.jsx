import directionDownMini from '../../assets/icons/direction-down-mini.png'
import SiteIcon from '../icon/SiteIcon.jsx'
import './SiteMoveButtonDesktop.css'

const LINKS = [
  { label: '교육급여바우처', external: true },
  { label: '기부', external: true },
  { label: '고졸만JOB', external: true },
  { label: '누리집안내지도' },
]

/**
 * Figma 사이트 이동버튼/데스크탑. 각 링크의 실제 주소는 아직 없어 href는 '#'이다.
 * onScreenSize: 화면크기 버튼을 눌렀을 때 실행할 함수. 열리는 목록은 Figma에 없다.
 */
function SiteMoveButtonDesktop({ onScreenSize, className = '', ...props }) {
  return (
    <nav className={`site-move-button-desktop ${className}`.trim()} aria-label="다른 사이트로 이동" {...props}>
      <ul className="site-move-button-desktop__list">
        {LINKS.map(({ label, external }) => (
          <li className="site-move-button-desktop__item" key={label}>
            <a className="site-move-button-desktop__link" href="#">
              {label}
              {external && <SiteIcon name="external-meta" />}
            </a>
          </li>
        ))}
        <li className="site-move-button-desktop__item">
          <button className="site-move-button-desktop__link" type="button" onClick={onScreenSize}>
            화면크기
            <img className="site-move-button-desktop__mini-icon" src={directionDownMini} alt="" />
          </button>
        </li>
        <li className="site-move-button-desktop__item">
          <a className="site-move-button-desktop__link" href="#">
            Language
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SiteMoveButtonDesktop
