import './ScheduleSkeleton.css'

/**
 * 일정을 불러오는 동안 보여 주는 뼈대 화면 (F-02).
 * blocks: 회색 칸의 개수
 */
function ScheduleSkeleton({ blocks = 3, className = '', ...props }) {
  return (
    <div className={`schedule-skeleton ${className}`.trim()} role="status" {...props}>
      <p className="schedule-skeleton__message">최신 일정을 불러오는 중입니다</p>
      {Array.from({ length: blocks }, (_, index) => (
        <div className="schedule-skeleton__block" aria-hidden="true" key={index} />
      ))}
    </div>
  )
}

export default ScheduleSkeleton
