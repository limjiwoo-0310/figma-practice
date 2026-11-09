import { useState } from 'react'
import PopularMenu from '../navigation/PopularMenu.jsx'
import './NoticeBox.css'

/**
 * Figma 공지사항 상자. 위쪽 탭과 아래쪽 글 목록이다.
 * tabs: 탭 이름 목록
 * notices: 탭 이름별 글 제목 목록. 예: { 공지사항: ['제목', ...] }
 * 너비는 감싸는 부모가 정한다.
 */
function NoticeBox({ tabs, notices, className = '', ...props }) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className={`notice-box ${className}`.trim()} {...props}>
      <div className="notice-box__tabs">
        {tabs.map((tab) => (
          <PopularMenu className="popular-menu--fill" active={tab === activeTab} onClick={() => setActiveTab(tab)} key={tab}>
            {tab}
          </PopularMenu>
        ))}
      </div>
      <ul className="notice-box__list">
        {(notices[activeTab] ?? []).map((notice, index) => (
          <li className="notice-box__item" key={`${notice}-${index}`}>
            {notice}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NoticeBox
