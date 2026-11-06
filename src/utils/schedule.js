// 기간과 현재 시각으로 일정 상태를 계산한다 (F-01).

const DAY_MS = 24 * 60 * 60 * 1000

function startOfDay(time) {
  const date = new Date(time)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

const pad = (value) => String(value).padStart(2, '0')

/**
 * start, end: 시작과 마감 시각(밀리초)
 * 반환값 key: 'upcoming'(예정) | 'open'(진행중) | 'closing'(마감임박) | 'closed'(종료)
 * 마감 시각이 지나는 순간 'closed'가 된다.
 */
export function getScheduleStatus({ start, end }, now = Date.now()) {
  if (now > end) return { key: 'closed', label: '종료', dDay: null }
  if (now < start) return { key: 'upcoming', label: '예정', dDay: null }

  const dDay = Math.round((startOfDay(end) - startOfDay(now)) / DAY_MS)
  if (dDay === 0) return { key: 'closing', label: '마감임박 D-0', dDay }

  return { key: 'open', label: `진행중 D-${dDay}`, dDay }
}

export function formatTime(time) {
  const date = new Date(time)
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function formatDate(time, withYear = true) {
  const date = new Date(time)
  const monthDay = `${pad(date.getMonth() + 1)}.${pad(date.getDate())}`
  return withYear ? `${date.getFullYear()}.${monthDay}` : monthDay
}

// 같은 해면 뒤쪽 연도를 줄인다. 예: 2026.11.06~11.20
export function formatPeriod({ start, end }) {
  const sameYear = new Date(start).getFullYear() === new Date(end).getFullYear()
  return `${formatDate(start)}~${formatDate(end, !sameYear)}`
}

// 상태 배지 옆에 적는 짧은 문구
export function formatScheduleNote({ start, end }, status) {
  if (status.key === 'closed') return '마감되었습니다'
  if (status.key === 'upcoming') return `${formatDate(start, false)} ${formatTime(start)} 시작`
  return `${formatTime(end)} 마감`
}
