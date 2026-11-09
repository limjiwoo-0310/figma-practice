/*
 * 예시 데이터. 실제 일정과 마감 시각이 아니다.
 * 날짜, D-Day, 마감 시각은 Figma 완성화면(17:6701)에 적힌 자리표시 값이다.
 * 공지 제목, 카드 설명, 신청인 정보(이름, 주민등록번호, 주소)는 임의로 지어낸 더미 값이며 실제 공지나 실존 인물이 아니다.
 * 실제 서비스에 쓰기 전에 공식 값으로 바꿔야 한다.
 */

import serviceCreditGuide from '../assets/images/service-cards/image1.jpg'
import serviceRepaymentRelief from '../assets/images/service-cards/image2.jpg'
import serviceFraudReport from '../assets/images/service-cards/image3.jpg'
import serviceScholarshipInfo from '../assets/images/service-cards/image4.jpg'
import serviceSupportLevel from '../assets/images/service-cards/image5.jpg'

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
export const LAST_MODIFIED = '2026.11.02'


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
  { schedule: APPLICATION_SCHEDULE, title: '국가장학금 1유형 신청', description: '가구의 소득 수준에 따라 등록금을 지원하는 장학금입니다.', keywords: ['장학금', '대학생', '소득연계'], to: '/guide/summary' },
  { schedule: { start: exampleAt(-3, 9), end: exampleAt(14, 18) }, title: '국가장학금 2유형 신청', description: '대학이 자체 기준으로 학생을 선발해 지원하는 장학금입니다.', keywords: ['장학금', '대학생', '대학연계'] },
  { schedule: { start: exampleAt(-3, 9), end: exampleAt(5, 20) }, title: '국가근로장학금', description: '교내외 기관에서 일하고 근로 시간만큼 장학금을 받습니다.', keywords: ['장학금', '대학생', '근로'] },
]

// 학자금대출 탭 카드. 기간은 예시이며 실제 대출 신청 기간이 아니다.
export const LOAN_CARDS = [
  { schedule: { start: exampleAt(-5, 9), end: exampleAt(10, 18) }, title: '취업 후 상환 학자금대출', description: '재학 중에는 갚지 않고, 취업해 소득이 생긴 뒤부터 갚는 대출입니다.', keywords: ['대출', '등록금', '취업후상환'] },
  { schedule: { start: exampleAt(-5, 9), end: exampleAt(20, 18) }, title: '일반 상환 학자금대출', description: '정해진 기간 동안 이자와 원금을 나누어 갚는 대출입니다.', keywords: ['대출', '등록금', '일반상환'] },
  { schedule: { start: exampleAt(3, 9), end: exampleAt(30, 18) }, title: '생활비 대출', description: '학기 중 생활에 필요한 비용을 빌려 쓸 수 있는 대출입니다.', keywords: ['대출', '생활비', '학기중'] },
]

export const SERVICE_CARDS = [
  // image: src/assets/images/service-cards의 이미지. 이미지 안에 글자가 있어 imageAlt에 그 글자를 적는다.
  { title: '장학금 신청에 필요한 서류 목록', description: '신청 전에 준비할 서류를 한 번에 확인합니다.', keywords: ['서류', '준비물'], image: serviceCreditGuide, imageAlt: '신용회복 필수 가이드! 상환관리부터 법적권리까지' },
  { title: '고졸취업지원', description: '고등학교 졸업 후 취업한 청년을 위한 지원 안내입니다.', keywords: ['취업', '고졸지원'], image: serviceRepaymentRelief, imageAlt: '한국장학재단 학자금대출 상환부담경감제도' },
  { title: '나의 학자금 지원구간 확인', description: '소득과 재산으로 산정된 내 지원구간을 조회합니다.', keywords: ['지원구간', '조회'], image: serviceSupportLevel, imageAlt: '학자금 지원구간 산정체계, 무엇이 달라졌을까?' },
  { title: '나에게 맞는 장학금은?', description: '학년과 상황을 고르면 받을 수 있는 장학금을 추천합니다.', keywords: ['추천', '맞춤'], image: serviceScholarshipInfo, imageAlt: '놓치지 않을 거예요, 장학금 정보 모아보기' },
  { title: '장학금부정수급 신고', description: '부정하게 장학금을 받은 사례를 신고합니다.', keywords: ['신고', '부정수급'], image: serviceFraudReport, imageAlt: '장학금 부정청구! 공공재정환수제도 알아보기' },
]

// 탭별 공지 제목. 모두 임의로 지어낸 더미 제목이며 실제 공지가 아니다. 탭끼리, 탭 안에서 겹치지 않는다.
export const NOTICES = {
  공지사항: [
    '2026 안동시 학자금대출 이자지원 신청 안내',
    '2026년 하반기 영주시 학자금대출 이자지원 신청기간 안내',
    '홈페이지 간편인증(NH인증서) 서비스 일시 중단 안내',
    '가구원 정보제공 동의 절차 변경 안내',
    '2026년 2학기 대학원 대통령과학장학금 계속장학생 선발 일정 안내',
  ],
  홍보영상: [
    '[영상] 3분 만에 끝내는 국가장학금 신청 따라하기',
    '[영상] 신입생이 꼭 알아야 할 학자금 지원구간',
    '[영상] 가구원 동의, 부모님은 이렇게 하세요',
    '[영상] 국가근로장학생의 하루',
    '[영상] 취업 후 상환 학자금대출 쉽게 이해하기',
  ],
  재단동정: [
    '재단, 지역 대학과 장학 협력 업무협약 체결',
    '재단 임직원, 연말 나눔 봉사활동 실시',
    '대학생 서포터즈 발대식 개최',
    '재단, 고객 만족도 조사 결과 공개',
    '장학생 멘토링 우수 사례 시상식 개최',
  ],
  보도자료: [
    '2학기 국가장학금 신청 화면 개편으로 이용 편의 높여',
    '푸른등대 기부장학금 참여 기업 확대',
    '교육급여 바우처 신청 방법 안내 강화',
    '저소득층 대학생 생활비 지원 확대 추진',
    '고졸 취업 청년 지원 사업 설명회 개최',
  ],
}

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
    { label: '이름', value: '김하늘', labelSize: 'narrow', tight: true },
    { label: '주민등록번호', value: '040312-3******', labelSize: 'medium', tight: true },
  ],
  [{ label: '거주지', value: '서울특별시 마포구 하늘마루로 12\n(하늘아파트 101동 1203호)' }],
  [{ label: '신청내역', value: '국가장학금 제1유형' }],
]

export const HOUSEHOLD_ROWS = [
  [{ label: '부', value: '동의 하지 않음' }],
  [{ label: '모', value: '동의 함' }],
]

export const DOCUMENT_ROWS = [
  [{ label: '가족관계증명서', value: '제출하지 않음', labelSize: 'document' }],
  [{ label: '재학증명서', value: '행정정보 확인 중', labelSize: 'document' }],
]

export const AGREEMENTS = [
  { label: '개인정보 수집·이용 동의', required: true },
  { label: '개인정보 제공 동의', required: true },
  { label: '금융정보 등 제공 동의', required: true },
  { label: '신청인 확인 및 서약', required: true },
  { label: '선택적 정보 수집·이용 동의', required: false },
]
