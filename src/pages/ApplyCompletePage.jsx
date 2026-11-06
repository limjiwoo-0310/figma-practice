import { useNavigate } from 'react-router'
import completeDesktop from '../assets/images/complete-desktop.png'
import completeMobile from '../assets/images/complete-mobile.png'
import Button from '../components/button/Button.jsx'
import ActionBar from '../components/layout/ActionBar.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import PageInfoTitle from '../components/layout/PageInfoTitle.jsx'
import Prose from '../components/layout/Prose.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import LocationIndicator from '../components/navigation/LocationIndicator.jsx'
import './FlowPages.css'

const LOCATION = [{ label: '홈', href: '/' }, { label: '장학금의 신청 과정입니다', href: '/guide/summary' }, { label: '신청서 작성' }]

const CHECKS = [
  ['신청 완료 여부 확인', ['신청정보를 최종 제출한 후 신청현황에서 신청 완료 여부를 확인하세요.']],
  ['서류 제출 대상 여부 확인', ['신청 후 장학금 → 장학금신청 → 서류제출현황에서 서류 제출 대상 여부를 확인하세요.']],
  ['가구원 동의 여부 확인', ['가구원 정보제공 동의가 필요한 경우 부모 또는 배우자의 동의 완료 여부를 확인하세요.']],
  ['신청정보 변경 여부 확인', ['학교, 학적, 가족관계, 연락처 등 신청정보에 변동이 있는 경우 재단 안내에 따라 필요한 절차를 진행하세요.']],
  ['심사 결과 확인', ['장학금 신청현황에서 학자금 지원구간 및 선발 결과를 확인하세요.']],
  ['등록금 및 장학금 지급 확인', ['국가장학금은 등록금 범위 내에서 지원되므로 등록금 고지서와 장학금 반영 여부를 함께 확인하세요.']],
  [
    '중복지원 및 반환 유의',
    [
      '등록금 범위를 초과하여 장학금이 지원되지 않도록 다른 장학금 및 학자금 지원 내역을 확인하세요.',
      '자퇴·제적 등 학적 변동이나 오선발·오지급 등의 사유가 발생하면 장학금 반환이 발생할 수 있습니다.',
    ],
  ],
]

function ApplyCompletePage() {
  const navigate = useNavigate()

  return (
    <div className="flow flow--apply">
      <SiteHeader desktopOnly />
      <LocationIndicator className="flow__location" items={LOCATION} />
      <div className="flow__title flow__title--complete">
        <PageInfoTitle onBack={() => navigate('/apply/documents')}>
          <span className="flow__only-mobile">국가장학금 1유형 신청완료</span>
          <span className="flow__only-desktop">장학금 신청 완료</span>
        </PageInfoTitle>
        <PageInfoHeading className="flow__page-heading" size="page">
          <span className="flow__only-mobile">장학금신청이 완료되었습니다</span>
          <span className="flow__only-desktop">장학금 신청이 완료되었습니다.</span>
        </PageInfoHeading>
      </div>
      <main>
        <picture className="flow__complete-image">
          <source media="(min-width: 1280px)" srcSet={completeDesktop} />
          <img src={completeMobile} alt="" />
        </picture>
        <Prose className="flow__complete-prose">
          <p className="prose__title">신청 완료 후 반드시 확인하세요</p>
          <ol className="flow__checks">
            {CHECKS.map(([title, items]) => (
              <li className="prose__gap" key={title}>
                <strong>{title}</strong>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <strong className="prose__gap">신청 후 진행상태</strong>
          <p>신청 완료 → 서류 확인 → 가구원 동의 확인 → 소득·재산 조사 → 학자금 지원구간 산정 → 대학 및 학생 심사 → 선발 결과 확인 → 장학금 지급</p>
          <p className="prose__gap">학자금 지원구간 산정을 위해 사회보장정보시스템을 통한 소득·재산 조사가 이루어지므로 신청 직후 최종 지원구간이 확정되는 것은 아닙니다.</p>
          <strong className="prose__gap">문의</strong>
          <p>국가장학금 신청 및 심사와 관련한 자세한 사항은 한국장학재단 상담센터 1599-2000 또는 재단 홈페이지의 상담 서비스를 이용해 주세요.</p>
        </Prose>
      </main>
      <ActionBar align="end">
        <Button onClick={() => navigate('/')}>확인</Button>
      </ActionBar>
    </div>
  )
}

export default ApplyCompletePage
