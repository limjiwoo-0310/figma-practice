/*
 * 예시 데이터. 실제 일정과 마감 시각이 아니다.
 * 날짜, D-Day, 마감 시각, 공지 제목은 모두 Figma 완성화면(17:6701)에 적힌 자리표시 값이다.
 * 실제 서비스에 쓰기 전에 공식 값으로 바꿔야 한다.
 */

const DAY_MS = 24 * 60 * 60 * 1000

// 오늘 기준 며칠 뒤의 시각. 데모가 언제 열어도 동작하도록 고정 날짜를 쓰지 않는다. 실제 일정이 아니다.
function exampleAt(daysFromToday, hour) {
  const today = new Date()
  return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour).getTime() + daysFromToday * DAY_MS
}

// 다음 18시. 예시 신청 기간이 데모 중에 끝나 버리지 않게 한다. 실제 마감 시각이 아니다.
function nextExampleDeadline() {
  const todayDeadline = exampleAt(0, 18)
  return Date.now() < todayDeadline ? todayDeadline : exampleAt(1, 18)
}

export const APPLICATION_SCHEDULE = { start: exampleAt(-3, 9), end: nextExampleDeadline() }

// 최종 수정일 예시. 실제 수정일이 아니다 (F-05).
export const LAST_MODIFIED = 'YYYY.MM.DD'


export const POPULAR_MENUS = ['장학금 신청', '학자금대출', '인재육성', '기숙사', '고객센터', '재단소개', '정보공개']

export const CALENDAR_EXAMPLE = {
  title: '2026년 10월',
  startOffset: 2,
  days: 30,
  today: 1,
  range: { start: 20, end: 24 },
  legend: '장학금 신청기간',
}

export const SCHOLARSHIP_CARDS = [
  { schedule: APPLICATION_SCHEDULE, title: '국가장학금 1유형 신청', description: '국가장학금 1유형에대한 설명을 써주세요.', keywords: ['장학금', '대학생', '국가장학'], to: '/guide/summary' },
  { schedule: { start: exampleAt(-3, 9), end: exampleAt(14, 18) }, title: '국가장학금 2유형 신청', description: '국가장학금 2유형에 대한 설명을 써주세요.', keywords: ['장학금', '대학생', '국가장학'] },
  { schedule: { start: exampleAt(-3, 9), end: exampleAt(5, 20) }, title: '국가근로장학금', description: '국가근로장학금에대한 설명을 써주세요', keywords: ['장학금', '대학생', '국가근로'] },
]

export const SERVICE_CARDS = [
  { title: '장학금 신청에 필요한 서류 목록', description: '서비스 설명', keywords: ['장학금', '서류'] },
  { title: '고졸취업지원', description: '서비스 설명', keywords: ['취업', '고졸지원'] },
  { title: '나의 학자금 지원구간 확인', description: '서비스 설명', keywords: ['대출', '학자금'] },
  { title: '나에게 맞는 장학금은?', description: '서비스 설명', keywords: ['장학금', '소득분위'] },
  { title: '장학금부정수급 신고', description: '서비스 설명', keywords: ['키워드', '키워드'] },
]

export const NOTICES = [
  '2026 안동시 학자금대출 이자지원 신청 안내',
  '2026년 하반기 영주시 학자금대출 이자지원 신청기간 안내',
  '홈페이지 간편인증(NH인증서) 서비스 일시 중단 안내',
  '홈페이지 간편인증(NH인증서) 서비스 일시 중단 안내',
  '2026년 2학기 대학원 대통령과학장학금 계속장학생 선발 일정 안내',
]

export const SCHEDULE_SUMMARIES = [
  { title: '장학금 신청', schedule: APPLICATION_SCHEDULE },
  { title: '서류제출', schedule: { start: exampleAt(-3, 9), end: exampleAt(7, 18) } },
  { title: '가구원 동의', schedule: { start: exampleAt(2, 9), end: exampleAt(14, 18) } },
]

export const GRADE_ROWS = [
  { label: '신입생· 편입생· 재입학생', value: '첫 학기에 한하여 성적 및 이수학점 기준 미적용' },
  { label: '재학생', value: '직전학기 12학점 이상 이수\n+ 100점 만점의 80점 이상' },
  { label: '기초·차상위\n계층', value: '전학기 12학점 이상 이수 + 70점 이상' },
  { label: '장애학생', value: '성적 및 이수학점 기준 미적용' },
  { label: '자립준비\n청년', value: '백분위 성적 기준 미적용,\n이수학점 기준 적용' },
]

export const APPLICANT_ROWS = [
  [
    { label: '이름', value: '홍길동', labelSize: 'narrow', tight: true },
    { label: '주민등록번호', value: '000000-0000000', labelSize: 'medium', tight: true },
  ],
  [{ label: '거주지', value: '000 00시 00구 00동 00-0\n(000동 000호)' }],
  [{ label: '신청내역', value: '국가장학금 제1유형' }],
]

export const HOUSEHOLD_ROWS = [
  [{ label: '부', value: '동의 하지 않음' }],
  [{ label: '모', value: '동의 함' }],
]

export const DOCUMENT_ROWS = [
  [{ label: '제출해야하는 서류1', value: '제출하지 않음', labelSize: 'document' }],
  [{ label: '제출해야하는 서류2', value: '행정정보 확인 중', labelSize: 'document' }],
]

export const AGREEMENTS = [
  { label: '개인정보 수집·이용 동의', required: true },
  { label: '개인정보 제공 동의', required: true },
  { label: '금융정보 등 제공 동의', required: true },
  { label: '신청인 확인 및 서약', required: true },
  { label: '선택적 정보 수집·이용 동의', required: false },
]
