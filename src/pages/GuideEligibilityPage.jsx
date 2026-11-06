import GradeTable from '../components/card/GradeTable.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import Prose from '../components/layout/Prose.jsx'
import { GRADE_ROWS } from '../data/exampleData.js'
import GuideLayout from './GuideLayout.jsx'

function GuideEligibilityPage() {
  return (
    <GuideLayout active="/guide/eligibility">
      <PageInfoHeading className="flow__heading flow__heading--guide">자격안내</PageInfoHeading>
      <div className="flow__panel flow__panel--eligibility">
        <GradeTable className="flow-eligibility__table" rows={GRADE_ROWS} />
        <Prose className="flow-eligibility__prose">
          <strong>지원 대상</strong>
          <p>다음 요건을 충족하는 학생이 국가장학금 1유형 신청 대상입니다.</p>
          <ul className="prose__gap">
            <li>대한민국 국적을 보유한 학생</li>
            <li>국내 대학에 재학 중인 학부생</li>
            <li>해당 학기 국가장학금 신청 및 가구원 정보제공 동의, 필요한 서류 제출을 완료한 학생</li>
            <li>학자금 지원구간 기준을 충족하는 학생</li>
            <li>해당 학기의 성적 기준을 충족하는 학생</li>
          </ul>
        </Prose>
      </div>
    </GuideLayout>
  )
}

export default GuideEligibilityPage
