import DirectionIcon from '../icon/DirectionIcon.jsx'
import './Calendar.css'

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

/**
 * Figma 캘린더. 일정 값은 넘겨받으며 달을 옮기는 기능은 아직 없다.
 * title: 맨 위 글자 (예: '2026년 10월')
 * startOffset: 1일 앞의 빈칸 수
 * days: 그 달의 날짜 수
 * today: 회색 동그라미로 표시할 날짜
 * range: 강조 막대 { start, end } (같은 주 안의 날짜)
 * legend: 강조 막대의 설명
 * 너비는 감싸는 부모가 정한다.
 */
function Calendar({ title, startOffset = 0, days = 30, today, range, legend, className = '', ...props }) {
  const rangeStart = range ? startOffset + range.start - 1 : 0
  const rangeStyle = range && {
    gridRow: Math.floor(rangeStart / 7) + 1,
    gridColumn: `${(rangeStart % 7) + 1} / span ${range.end - range.start + 1}`,
  }

  return (
    <section className={`calendar ${className}`.trim()} aria-label={title} {...props}>
      <div className="calendar__header">
        <div className="calendar__month">
          <p className="calendar__title">{title}</p>
          <DirectionIcon className="calendar__month-icon" direction="down" variant="category" />
        </div>
        <div className="calendar__arrows">
          <button className="calendar__arrow calendar__arrow--prev" type="button" aria-label="이전 달" disabled />
          <button className="calendar__arrow calendar__arrow--next" type="button" aria-label="다음 달" disabled />
        </div>
      </div>
      <ul className="calendar__weekdays" aria-hidden="true">
        {WEEKDAYS.map((weekday) => (
          <li key={weekday}>{weekday}</li>
        ))}
      </ul>
      <ol className="calendar__days">
        {range && <li className="calendar__range" style={rangeStyle} aria-hidden="true" />}
        {Array.from({ length: days }, (_, index) => {
          const day = index + 1
          const position = startOffset + index

          return (
            <li
              className="calendar__day"
              style={{ gridRow: Math.floor(position / 7) + 1, gridColumn: (position % 7) + 1 }}
              key={day}
            >
              <span className={day === today ? 'calendar__today' : undefined}>{day}</span>
            </li>
          )
        })}
      </ol>
      {legend && (
        <p className="calendar__legend">
          <span className="calendar__legend-mark" aria-hidden="true" />
          {legend}
        </p>
      )}
    </section>
  )
}

export default Calendar
