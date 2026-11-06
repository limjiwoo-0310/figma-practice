import ScheduleSkeleton from '../components/card/ScheduleSkeleton.jsx'
import ScheduleSummary from '../components/card/ScheduleSummary.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import { SCHEDULE_SUMMARIES } from '../data/exampleData.js'
import { useExampleLoading } from '../hooks/useExampleLoading.js'
import { useNow } from '../hooks/useNow.js'
import GuideLayout, { HelpLinks } from './GuideLayout.jsx'

function GuideSummaryPage() {
  const now = useNow()
  const isLoading = useExampleLoading()

  return (
    <GuideLayout active="/guide/summary">
      <PageInfoHeading className="flow__heading flow__heading--guide">통합일정안내</PageInfoHeading>
      <div className="flow__panel flow__panel--summary">
        {isLoading ? (
          <ScheduleSkeleton />
        ) : (
          <ol className="flow-timeline">
            {SCHEDULE_SUMMARIES.map(({ title, schedule }) => (
              <li className="flow-timeline__item" key={title}>
                <ScheduleSummary title={title} schedule={schedule} now={now} />
              </li>
            ))}
          </ol>
        )}
        <HelpLinks className="flow-help--desktop" />
      </div>
    </GuideLayout>
  )
}

export default GuideSummaryPage
