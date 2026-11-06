import Icon from '../icon/Icon.jsx'
import './IconMenu.css'

/**
 * icon: Icon 컴포넌트의 name 값
 */
function IconMenu({ icon = 'scholarship', href = '#', className = '', children = '장학금 신청', ...props }) {
  return (
    <a className={`icon-menu ${className}`.trim()} href={href} {...props}>
      <Icon name={icon} />
      {children}
    </a>
  )
}

export default IconMenu
