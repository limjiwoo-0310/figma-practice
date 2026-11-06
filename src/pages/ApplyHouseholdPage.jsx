import { useState } from 'react'
import Button from '../components/button/Button.jsx'
import InfoTable from '../components/layout/InfoTable.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import Prose from '../components/layout/Prose.jsx'
import PopupScreen from '../components/overlay/PopupScreen.jsx'
import { HOUSEHOLD_ROWS } from '../data/exampleData.js'
import ApplyLayout from './ApplyLayout.jsx'

function ApplyHouseholdPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <ApplyLayout step={3} title="가구원 정보제공 동의 및 동의 현황" prev="/apply/info" next="/apply/documents">
      <PageInfoHeading className="flow__heading flow__heading--household flow__heading--plain">가구원 정보제공 동의 현황</PageInfoHeading>
      <div className="flow__content flow__content--household">
        <Prose className="flow__prose">
          <p>가구원 정보제공 동의 절차에서는 학자금 지원구간 산정에 필요한 다음 정보를 확인·제공할 수 있습니다.</p>
          <ul>
            <li>성명 및 본인 확인 정보</li>
            <li>가족관계 정보</li>
            <li>소득 관련 정보</li>
            <li>재산 관련 정보</li>
            <li>금융자산 관련 정보</li>
            <li>부채 관련 정보</li>
            <li>기타 학자금 지원구간 산정에 필요한 정보</li>
          </ul>
          <strong className="prose__gap">동의 방법</strong>
          <p>가구원은 전자서명수단을 이용하여 온라인으로 정보제공 동의를 진행할 수 있습니다.</p>
          <ul>
            <li>한국장학재단 홈페이지</li>
            <li>한국장학재단 모바일 앱</li>
            <li>기타 재단에서 안내하는 동의 경로</li>
          </ul>
          <p className="prose__gap">전자서명수단으로는 공동인증서, 금융인증서 및 간편인증 등을 사용할 수 있습니다.</p>
          <p>중요: 가구원 정보제공 동의가 필요한 경우, 학생이 국가장학금을 신청했다고 해서 동의 절차가 자동으로 완료되는 것은 아닙니다. 가구원의 동의 완료 여부를 반드시 확인해 주세요.</p>
        </Prose>
        <InfoTable rows={HOUSEHOLD_ROWS} compact />
        <Button className="flow__guide-button" variant="guide" trailing="arrow" onClick={() => setIsPopupOpen(true)}>
          가구원이란?
        </Button>
      </div>
      <PopupScreen size="medium" title="가구원이란?" open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <p>학자금 지원 신청자의 부모 또는 배우자를 의미합니다.</p>
        <ul className="popup-screen__list">
          <li>신청자가 미혼인 경우: 부모</li>
          <li>신청자가 기혼인 경우: 배우자</li>
        </ul>
        <p>미혼 학생은 부모 각각의 동의가 필요할 수 있습니다.</p>
      </PopupScreen>
    </ApplyLayout>
  )
}

export default ApplyHouseholdPage
