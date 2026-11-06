import './PopularMenu.css'

/**
 * active: 선택된 메뉴(Figma의 클릭 상태)
 */
function PopularMenu({ active = false, type = 'button', className = '', children = '장학금', ...props }) {
  const classNames = ['popular-menu', active && 'popular-menu--active', className].filter(Boolean).join(' ')

  return (
    <button type={type} className={classNames} aria-pressed={active} {...props}>
      {children}
    </button>
  )
}

export default PopularMenu
