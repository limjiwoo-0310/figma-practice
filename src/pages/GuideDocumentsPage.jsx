import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import DocumentsGuide from './DocumentsGuide.jsx'
import GuideLayout from './GuideLayout.jsx'

function GuideDocumentsPage() {
  return (
    <GuideLayout active="/guide/documents">
      <PageInfoHeading className="flow__heading flow__heading--apply flow__heading--plain">제출서류안내</PageInfoHeading>
      <div className="flow__panel flow__panel--documents">
        <DocumentsGuide className="flow__prose" />
      </div>
    </GuideLayout>
  )
}

export default GuideDocumentsPage
