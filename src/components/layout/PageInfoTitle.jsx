import SiteIcon from '../icon/SiteIcon.jsx'
import './PageInfoTitle.css'

/**
 * Figma 페이지 정보/타이틀. 뒤로가기 버튼과 페이지 제목이다.
 * onBack: 뒤로가기를 눌렀을 때 실행할 함수
 * 너비는 감싸는 부모가 정한다.
 */
function PageInfoTitle({ onBack, className = '', children = '국가 장학금 제 1유형 신청', ...props }) {
  return (
    <div className={`page-info-title ${className}`.trim()} {...props}>
      <button className="page-info-title__back" type="button" aria-label="뒤로 가기" onClick={onBack}>
        <SiteIcon name="back-title" />
      </button>
      <h1 className="page-info-title__text">{children}</h1>
    </div>
  )
}

export default PageInfoTitle
