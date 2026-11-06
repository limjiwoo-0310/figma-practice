import './StatusBadge.css'

/**
 * 일정 상태 배지 (F-01). 색만으로 구분하지 않도록 상태 이름을 글자로 적는다.
 * status: utils/schedule.js의 getScheduleStatus 결과 { key, label }
 */
function StatusBadge({ status, className = '', ...props }) {
  return (
    <span className={`status-badge status-badge--${status.key} ${className}`.trim()} {...props}>
      {status.label}
    </span>
  )
}

export default StatusBadge
