import arrowNext from '../../assets/icons/arrow-next.png'
import arrowPrev from '../../assets/icons/arrow-prev.png'
import guideHelp from '../../assets/icons/guide-help.png'
import guideOpen from '../../assets/icons/guide-open.png'
import directionRight from '../../assets/icons/arrow-right.png'
import siteSearch from '../../assets/icons/site-search.png'
import './Button.css'

const GUIDE_ICONS = { help: guideHelp, search: siteSearch, open: guideOpen, arrow: directionRight }

function ButtonIcon({ src }) {
  return <img className="button__icon" src={src} width="24" height="24" alt="" />
}

/**
 * variant
 * - primary: 파란 기본 버튼 (확인, 신청하기). Figma L의 Property 1=1
 * - secondary: 흰색 기본 버튼. Figma L의 Property 1=2
 * - small: 글자 길이만큼만 넓어지는 작은 버튼 (서류 제출하기). Figma 버튼
 * - prev: 흰색 이전단계 버튼 (왼쪽 화살표)
 * - next: 파란 다음단계 버튼 (오른쪽 화살표)
 * - guide: 흰색 참고 버튼. leading(앞 아이콘)과 trailing(뒤 아이콘)으로 help | search | open | arrow 또는 null을 고른다.
 * - category: 카테고리 버튼. active로 선택 상태를 표시한다.
 *
 * small을 뺀 나머지의 너비는 버튼을 감싸는 부모가 정한다.
 */
function Button({ variant = 'primary', leading = 'help', trailing = 'open', active = false, type = 'button', className = '', children, ...props }) {
  const classNames = ['button', `button--${variant}`, active && 'button--active', className].filter(Boolean).join(' ')

  return (
    <button type={type} className={classNames} aria-pressed={variant === 'category' ? active : undefined} {...props}>
      {variant === 'prev' && <ButtonIcon src={arrowPrev} />}
      {variant === 'guide' ? (
        <>
          <span className={`button__group ${leading === 'search' ? 'button__group--search' : ''}`.trim()}>
            {leading && <ButtonIcon src={GUIDE_ICONS[leading]} />}
            {children}
          </span>
          {trailing && <ButtonIcon src={GUIDE_ICONS[trailing]} />}
        </>
      ) : (
        children
      )}
      {variant === 'next' && <ButtonIcon src={arrowNext} />}
      {variant === 'small' && <ButtonIcon src={arrowNext} />}
    </button>
  )
}

export default Button
