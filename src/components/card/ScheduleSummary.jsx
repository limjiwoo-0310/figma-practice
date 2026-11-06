import { formatPeriod, formatScheduleNote, getScheduleStatus } from '../../utils/schedule.js'
import StatusBadge from './StatusBadge.jsx'
import './ScheduleSummary.css'

/**
 * Figma 일정요약 카드.
 * title: 일정 이름
 * schedule: { start, end } 시작과 마감 시각. 상태와 문구는 여기서 계산한다.
 * now: 현재 시각
 * 너비는 감싸는 부모가 정한다.
 */
function ScheduleSummary({ title, schedule, now, className = '', ...props }) {
  const status = getScheduleStatus(schedule, now)

  return (
    <article className={`schedule-summary ${className}`.trim()} {...props}>
      <h3 className="schedule-summary__title">{title}</h3>
      <p className="schedule-summary__period">{formatPeriod(schedule)}</p>
      <p className="schedule-summary__deadline">
        <StatusBadge status={status} />
        {formatScheduleNote(schedule, status)}
      </p>
    </article>
  )
}

export default ScheduleSummary
