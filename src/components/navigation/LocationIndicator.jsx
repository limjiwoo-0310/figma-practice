import './LocationIndicator.css'

const DEFAULT_ITEMS = [
  { label: '홈', href: '#' },
  { label: '장학금의 신청 과정입니다', href: '#' },
  { label: '신청 가이드' },
]

/**
 * Figma 위치 표시. 지금 보는 페이지의 경로다.
 * items: { label, href } 목록. 마지막 항목이 현재 페이지이며 링크가 아니다.
 * 처음과 마지막 사이의 항목은 Figma대로 말줄임표로 줄이고, 전체 문구는 title로 둔다.
 */
function LocationIndicator({ items = DEFAULT_ITEMS, className = '', ...props }) {
  return (
    <nav className={`location-indicator ${className}`.trim()} aria-label="현재 위치" {...props}>
      <ol className="location-indicator__list">
        {items.map(({ label, href }, index) => (
          <li className="location-indicator__item" key={label}>
            {index === items.length - 1 ? (
              <span className="location-indicator__label" aria-current="page">
                {label}
              </span>
            ) : (
              <a className="location-indicator__link" href={href} title={label}>
                <span className="location-indicator__label">{label}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default LocationIndicator
