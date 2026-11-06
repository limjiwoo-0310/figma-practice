import IconMenu from './IconMenu.jsx'
import './MenuBarDesktop.css'

const MENU_ITEMS = [
  { icon: 'scholarship', label: '장학금 신청' },
  { icon: 'loan', label: '학자금대출신청' },
  { icon: 'terms', label: '조건변경' },
  { icon: 'mentoring', label: '멘토링신청' },
  { icon: 'attendance', label: '출근부관리' },
  { icon: 'donation', label: '푸른등대기부' },
  { icon: 'voucher', label: '교육급여바우처' },
  { icon: 'employment', label: '고졸취업지원' },
]

function MenuBarDesktop({ className = '', ...props }) {
  return (
    <nav className={`menu-bar-desktop ${className}`.trim()} aria-label="주요 서비스" {...props}>
      <ul className="menu-bar-desktop__list">
        {MENU_ITEMS.map(({ icon, label }) => (
          <li key={label}>
            <IconMenu icon={icon}>{label}</IconMenu>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuBarDesktop
