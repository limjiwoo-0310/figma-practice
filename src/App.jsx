import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import ChatbotItem from './components/button/ChatbotItem.jsx'
import ApplyAgreementPage from './pages/ApplyAgreementPage.jsx'
import ApplyCompletePage from './pages/ApplyCompletePage.jsx'
import ApplyDocumentsPage from './pages/ApplyDocumentsPage.jsx'
import ApplyHouseholdPage from './pages/ApplyHouseholdPage.jsx'
import ApplyInfoPage from './pages/ApplyInfoPage.jsx'
import GuideDocumentsPage from './pages/GuideDocumentsPage.jsx'
import GuideEligibilityPage from './pages/GuideEligibilityPage.jsx'
import GuideSchedulePage from './pages/GuideSchedulePage.jsx'
import GuideSummaryPage from './pages/GuideSummaryPage.jsx'
import MainPage from './pages/MainPage.jsx'
import './App.css'

// 화면을 옮기면 맨 위부터 보여 준다.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/guide/summary" element={<GuideSummaryPage />} />
        <Route path="/guide/schedule" element={<GuideSchedulePage />} />
        <Route path="/guide/eligibility" element={<GuideEligibilityPage />} />
        <Route path="/guide/documents" element={<GuideDocumentsPage />} />
        <Route path="/apply/agreement" element={<ApplyAgreementPage />} />
        <Route path="/apply/info" element={<ApplyInfoPage />} />
        <Route path="/apply/household" element={<ApplyHouseholdPage />} />
        <Route path="/apply/documents" element={<ApplyDocumentsPage />} />
        <Route path="/apply/complete" element={<ApplyCompletePage />} />
      </Routes>
      <ChatbotItem className="app__chatbot" aria-label="챗봇 상담" />
    </BrowserRouter>
  )
}

export default App
