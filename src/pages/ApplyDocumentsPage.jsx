import Button from '../components/button/Button.jsx'
import InfoTable from '../components/layout/InfoTable.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import { DOCUMENT_ROWS } from '../data/exampleData.js'
import ApplyLayout from './ApplyLayout.jsx'
import DocumentsGuide from './DocumentsGuide.jsx'

function ApplyDocumentsPage() {
  return (
    <ApplyLayout step={4} title="서류제출" prev="/apply/household" next="/apply/complete">
      <PageInfoHeading className="flow__heading flow__heading--apply flow__heading--plain">서류제출 현황</PageInfoHeading>
      <div className="flow__documents-status">
        <InfoTable rows={DOCUMENT_ROWS} />
        <Button variant="small">서류 제출하기</Button>
      </div>
      <div className="flow__content flow__content--apply">
        <DocumentsGuide className="flow__prose flow__prose--flush" strongNote />
      </div>
    </ApplyLayout>
  )
}

export default ApplyDocumentsPage
