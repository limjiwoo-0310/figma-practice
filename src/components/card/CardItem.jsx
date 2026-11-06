import { Link } from 'react-router'
import serviceImage from '../../assets/images/service-card.jpg'
import scholarshipImage from '../../assets/images/menu-scholarship.png'
import { formatScheduleNote, getScheduleStatus } from '../../utils/schedule.js'
import Keyword from './Keyword.jsx'
import StatusBadge from './StatusBadge.jsx'
import './CardItem.css'

const DEFAULT_IMAGES = { mobile: scholarshipImage, desktop: scholarshipImage, service: serviceImage }

/**
 * variant: 'mobile' | 'desktop' | 'service'(자주찾는 서비스, 마감 표시 없음)
 * schedule: { start, end } 시작과 마감 시각. 상태 배지와 마감 시각을 여기서 계산한다.
 * now: 현재 시각
 * keywords: 첫 번째는 메인, 나머지는 서브 키워드로 표시한다.
 * image, imageAlt: 카드 이미지와 설명. 글자가 담긴 이미지는 imageAlt를 꼭 적는다.
 * href: 넘기면 카드 전체가 링크가 된다. to: 앱 안의 화면으로 이동할 때 쓴다.
 * 너비는 감싸는 부모가 정한다.
 */
function CardItem({
  variant = 'desktop',
  schedule,
  now,
  title = '국가장학금 1유형 신청',
  description = '국가장학금 1유형에대한 설명을 써주세요.',
  keywords = variant === 'service' ? ['키워드', '키워드'] : ['키워드', '키워드', '키워드'],
  image = DEFAULT_IMAGES[variant],
  imageAlt = '',
  href,
  to,
  className = '',
  ...props
}) {
  const status = schedule ? getScheduleStatus(schedule, now) : null
  const Root = to ? Link : href ? 'a' : 'article'

  return (
    <Root className={`card-item card-item--${variant} ${className}`.trim()} href={href} to={to} {...props}>
      <div className="card-item__image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="card-item__content">
        {status && (
          <p className="card-item__deadline">
            <StatusBadge status={status} />
            <span>{formatScheduleNote(schedule, status)}</span>
          </p>
        )}
        <div className="card-item__text">
          <p className="card-item__title">{title}</p>
          <p className="card-item__description">{description}</p>
        </div>
        <div className="card-item__keywords">
          {keywords.map((keyword, index) => (
            <Keyword key={`${keyword}-${index}`} variant={index === 0 ? 'main' : 'sub'}>
              {keyword}
            </Keyword>
          ))}
        </div>
      </div>
    </Root>
  )
}

export default CardItem
