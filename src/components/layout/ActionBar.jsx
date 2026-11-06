import './ActionBar.css'

/**
 * 화면 아래에 고정되는 버튼 영역 (F-03).
 * align: 'end'(버튼 하나, 데스크탑에서 오른쪽) | 'center'(이전·다음 버튼)
 */
function ActionBar({ align = 'center', className = '', children, ...props }) {
  return (
    <div className={`action-bar action-bar--${align} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default ActionBar
