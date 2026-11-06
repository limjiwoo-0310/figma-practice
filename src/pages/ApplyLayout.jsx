import { useNavigate } from 'react-router'
import Button from '../components/button/Button.jsx'
import ActionBar from '../components/layout/ActionBar.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import PageInfoTitle from '../components/layout/PageInfoTitle.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import LocationIndicator from '../components/navigation/LocationIndicator.jsx'
import StepBar from '../components/navigation/StepBar.jsx'
import './FlowPages.css'

const LOCATION = [{ label: '홈', href: '/' }, { label: '장학금의 신청 과정입니다', href: '/guide/summary' }, { label: '신청서 작성' }]

/**
 * 신청서 작성 4단계의 공통 틀: 경로, 단계 제목, 진행 표시, 이전·다음 버튼.
 * step: 현재 단계(1~4) / title: 단계 제목 / prev, next: 이동할 주소
 * onNext: 다음 단계로 가기 전에 실행한다. false를 돌려주면 이동하지 않는다.
 */
function ApplyLayout({ step, title, prev, next, onNext, children }) {
  const navigate = useNavigate()

  return (
    <div className="flow flow--apply">
      <SiteHeader desktopOnly />
      <LocationIndicator className="flow__location" items={LOCATION} />
      <div className="flow__title flow__title--apply">
        <div className="flow__title-text">
          <PageInfoTitle onBack={() => navigate(prev)}>신청서 작성({step}/4)</PageInfoTitle>
          <StepBar className="flow__steps" current={step} showCount={false} />
          <PageInfoHeading className="flow__page-heading" size="page">
            {step}. {title}
          </PageInfoHeading>
        </div>
      </div>
      <main>{children}</main>
      <ActionBar>
        <Button variant="prev" onClick={() => navigate(prev)}>
          이전단계
        </Button>
        <Button variant="next" onClick={() => onNext?.() !== false && navigate(next)}>
          다음단계
        </Button>
      </ActionBar>
    </div>
  )
}

export default ApplyLayout
