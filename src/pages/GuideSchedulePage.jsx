import Calendar from '../components/card/Calendar.jsx'
import ScheduleSkeleton from '../components/card/ScheduleSkeleton.jsx'
import Accordion from '../components/layout/Accordion.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import Prose from '../components/layout/Prose.jsx'
import { CALENDAR_EXAMPLE } from '../data/exampleData.js'
import { useExampleLoading } from '../hooks/useExampleLoading.js'
import GuideLayout from './GuideLayout.jsx'

// 기간의 YYYY.MM.DD는 Figma의 자리표시 글자이며 실제 일정이 아니다.
function GuideSchedulePage() {
  const isLoading = useExampleLoading()

  return (
    <GuideLayout active="/guide/schedule">
      <PageInfoHeading className="flow__heading flow__heading--guide">상세일정안내</PageInfoHeading>
      <div className="flow__panel flow__panel--schedule">
        {isLoading ? (
          <ScheduleSkeleton blocks={2} />
        ) : (
          <div className="flow-schedule__row">
            <Calendar className="flow-schedule__calendar" {...CALENDAR_EXAMPLE} />
            <Prose className="flow-schedule__detail">
              <div>
                <strong>학생 신청</strong>
                <ul>
                  <li>신청기간: YYYY.MM.DD. 09:00 ~ YYYY.MM.DD. 18:00</li>
                  <li>신청 대상: 신입생, 편입생, 재입학생, 복학생, 재학생 등</li>
                </ul>
              </div>
              <div>
                <strong>서류 제출</strong>
                <ul>
                  <li>제출기간: YYYY.MM.DD. 09:00 ~ YYYY.MM.DD. 18:00</li>
                </ul>
              </div>
              <div>
                <strong>가구원 정보제공 동의</strong>
                <ul>
                  <li>동의기간: YYYY.MM.DD. 09:00 ~ YYYY.MM.DD. 18:00</li>
                </ul>
              </div>
            </Prose>
          </div>
        )}
        <Prose className="flow-schedule__notes">
          <Accordion title="유의사항">
            <ul>
              <li>신청 마감일에는 18시에 신청이 종료되므로 충분한 시간을 두고 신청해 주세요.</li>
              <li>신청 후에는 신청정보가 정확하게 입력되었는지 반드시 확인해 주세요.</li>
              <li>서류제출 대상 여부는 신청 후 재단에서 확인할 수 있습니다.</li>
              <li>가구원 정보제공 동의가 필요한 경우, 신청자 본인뿐만 아니라 가구원도 별도의 동의 절차를 완료해야 합니다.</li>
              <li>학자금 지원구간 산정에는 일정 시간이 소요될 수 있으므로 등록금 납부 일정 등을 고려하여 미리 신청하는 것을 권장합니다</li>
            </ul>
          </Accordion>
        </Prose>
      </div>
    </GuideLayout>
  )
}

export default GuideSchedulePage
