import './Prose.css'

/**
 * 안내 글 묶음. 문단, 소제목(strong), 목록의 글자 모양을 한곳에서 맞춘다.
 * 너비는 감싸는 부모가 정한다.
 */
function Prose({ className = '', children, ...props }) {
  return (
    <div className={`prose ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default Prose
