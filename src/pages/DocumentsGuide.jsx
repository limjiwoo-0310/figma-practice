import Accordion from '../components/layout/Accordion.jsx'
import Prose from '../components/layout/Prose.jsx'

// 서류 안내 글. 신청가이드 4단계와 신청서 작성 4단계에서 같이 쓴다.
// strongNote: 신청서 작성 화면처럼 주의 문구를 굵게 강조한다.
function DocumentsGuide({ strongNote = false, className = '' }) {
  return (
    <Prose className={className}>
      <strong>서류 제출 안내</strong>
      <p>신청 후 1~3일(휴일 제외) 뒤 장학금 → 장학금신청 → 서류제출현황에서 서류 제출 대상 여부를 확인할 수 있습니다.</p>
      <p className="prose__gap">신청자의 가족관계 및 가구 상황에 따라 제출해야 하는 서류가 달라질 수 있으며, 서류제출 대상이 아닌 경우에는 별도로 서류를 제출하지 않아도 됩니다.</p>
      <Accordion className="prose__gap" title="주요 제출서류">
        <ul>
          <li>가족관계증명서</li>
          <li>주민등록등본</li>
          <li>외국인등록증 등 외국인 관련 확인서류</li>
          <li>실종·거주불명 등을 확인할 수 있는 서류</li>
          <li>가족관계 및 가구원 확인에 필요한 증빙서류</li>
        </ul>
      </Accordion>
      <p className={`prose__note prose__gap ${strongNote ? 'prose__note--bold-desktop' : ''}`.trim()}>
        ※ 가족관계에 이혼, 혼외 자녀, 전혼 자녀, 사망 자녀, 입양 취소, 파양 등의 사항이 포함되어 전체 가족관계 확인이 필요한 경우에는 {strongNote ? <u>가족관계증명서(상세)</u> : '가족관계증명서(상세)'}가 요구될 수 있습니다.
      </p>
      <Accordion className="prose__gap" title="제출 전 확인">
        <ul>
          <li>서류는 발급일 및 제출 가능 기간을 확인해 주세요.</li>
          <li>서류의 주민등록번호 등 개인정보가 포함된 경우 재단의 제출 기준을 확인해 주세요.</li>
          <li>제출한 서류의 식별이 어렵거나 필요한 정보가 확인되지 않는 경우 추가 제출을 요청받을 수 있습니다.</li>
          <li>최종적으로 필요한 서류는 신청 후 서류제출현황에서 확인해 주세요.</li>
        </ul>
      </Accordion>
    </Prose>
  )
}

export default DocumentsGuide
