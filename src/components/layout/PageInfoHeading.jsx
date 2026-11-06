import './PageInfoHeading.css'

/**
 * Figma 페이지 정보/제목. 현재 단계의 제목이다.
 * size: 'section'(구역 제목) | 'page'(데스크탑에서 크게 보이는 페이지 제목)
 * 너비는 감싸는 부모가 정한다.
 */
function PageInfoHeading({ size = 'section', className = '', children = '1. 신청동의 및 서약', ...props }) {
  return (
    <h2 className={`page-info-heading page-info-heading--${size} ${className}`.trim()} {...props}>
      {children}
    </h2>
  )
}

export default PageInfoHeading
