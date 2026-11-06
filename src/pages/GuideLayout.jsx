import { useNavigate } from 'react-router'
import Button from '../components/button/Button.jsx'
import ActionBar from '../components/layout/ActionBar.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import PageInfoTitle from '../components/layout/PageInfoTitle.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import LocationIndicator from '../components/navigation/LocationIndicator.jsx'
import { APPLICATION_SCHEDULE, LAST_MODIFIED } from '../data/exampleData.js'
import { useNow } from '../hooks/useNow.js'
import { getScheduleStatus } from '../utils/schedule.js'
import './FlowPages.css'

const TABS = [
  { label: '1.요약', to: '/guide/summary' },
  { label: '2.일정', to: '/guide/schedule' },
  { label: '3.자격', to: '/guide/eligibility' },
  { label: '4.서류', to: '/guide/documents' },
]

const LOCATION = [{ label: '홈', href: '/' }, { label: '장학금의 신청 과정입니다', href: '/guide/summary' }, { label: '신청 가이드' }]

export function HelpLinks({ className = '' }) {
  return (
    <div className={`flow-help ${className}`.trim()}>
      <Button variant="guide" leading={null} trailing="arrow">
        자주 묻는 질문
      </Button>
      <Button variant="guide" leading={null} trailing="arrow">
        1:1 문의
      </Button>
    </div>
  )
}

/**
 * 신청가이드 4개 화면의 공통 틀: 경로, 제목, 탭, 모바일의 상세안내, 신청하기 버튼.
 * active: 현재 탭의 주소
 */
function GuideLayout({ active, children }) {
  const navigate = useNavigate()
  const now = useNow()
  const isClosed = getScheduleStatus(APPLICATION_SCHEDULE, now).key === 'closed'

  return (
    <div className="flow">
      <SiteHeader desktopOnly />
      <LocationIndicator className="flow__location" items={LOCATION} />
      <div className="flow__title flow__title--guide">
        <PageInfoTitle onBack={() => navigate('/')} />
        <PageInfoHeading className="flow__page-heading" size="page">
          신청가이드
        </PageInfoHeading>
        <p className="flow__updated">최종 수정일: {LAST_MODIFIED}</p>
      </div>
      <nav className="flow__tabs" aria-label="신청가이드 단계">
        {TABS.map(({ label, to }) => (
          <Button variant="category" active={to === active} aria-pressed={undefined} aria-current={to === active ? 'page' : undefined} onClick={() => navigate(to)} key={to}>
            {label}
          </Button>
        ))}
      </nav>
      <main>{children}</main>
      <section className="flow__help-mobile">
        <PageInfoHeading>상세안내</PageInfoHeading>
        <HelpLinks />
      </section>
      <ActionBar align="end">
        <Button disabled={isClosed} onClick={() => navigate('/apply/agreement')}>
          {isClosed ? '신청이 마감되었습니다' : '신청하기'}
        </Button>
      </ActionBar>
    </div>
  )
}

export default GuideLayout
