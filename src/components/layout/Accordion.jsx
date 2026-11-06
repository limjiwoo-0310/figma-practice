import DirectionIcon from '../icon/DirectionIcon.jsx'
import './Accordion.css'

/**
 * 펼침/접힘 안내 (F-02). 브라우저 기본 details를 써서 키보드와 화면 읽기 프로그램이 바로 동작한다.
 * title: 항상 보이는 제목
 * defaultOpen: 처음에 펼쳐 둘지 정한다.
 */
function Accordion({ title, defaultOpen = true, className = '', children, ...props }) {
  return (
    <details className={`accordion ${className}`.trim()} open={defaultOpen} {...props}>
      <summary className="accordion__title">
        <strong>{title}</strong>
        <DirectionIcon className="accordion__icon" direction="down" />
      </summary>
      {children}
    </details>
  )
}

export default Accordion
