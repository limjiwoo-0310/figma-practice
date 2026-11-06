import './Keyword.css'

/**
 * variant: 'main'(채워진 파란 배경) | 'sub'(테두리만)
 */
function Keyword({ variant = 'main', className = '', children = '키워드', ...props }) {
  const classNames = ['keyword', `keyword--${variant}`, className].filter(Boolean).join(' ')

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  )
}

export default Keyword
