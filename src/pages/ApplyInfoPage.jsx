import { useState } from 'react'
import Button from '../components/button/Button.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import PopupScreen from '../components/overlay/PopupScreen.jsx'
import ApplyLayout from './ApplyLayout.jsx'

function ApplyInfoPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <ApplyLayout step={2} title="개인정보 입력" prev="/apply/agreement" next="/apply/household">
      <PageInfoHeading className="flow__heading flow__heading--apply flow__heading--plain">학교정보</PageInfoHeading>
      <div className="flow__content flow__content--apply flow__content--school">
        <p className="flow__field-label">대학 구분 선택</p>
        <Button variant="guide" leading="search" trailing={null}>
          대학검색
        </Button>
      </div>
      <PageInfoHeading className="flow__heading flow__heading--apply flow__heading--plain">소득인정액 확인</PageInfoHeading>
      <div className="flow__content flow__content--apply flow__content--income">
        <Button variant="guide" leading="search" trailing={null}>
          정보 불러오기
        </Button>
        <Button className="flow__guide-button" variant="guide" trailing="arrow" onClick={() => setIsPopupOpen(true)}>
          소득인정액이란?
        </Button>
      </div>
      <PopupScreen open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </ApplyLayout>
  )
}

export default ApplyInfoPage
