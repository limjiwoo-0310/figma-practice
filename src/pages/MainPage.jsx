import { useState } from 'react'
import bannerDesktop from '../assets/images/banner-bg.png'
import bannerMobile from '../assets/images/banner-bg-mobile.jpg'
import FooterPopupButton from '../components/button/FooterPopupButton.jsx'
import Calendar from '../components/card/Calendar.jsx'
import CardItem from '../components/card/CardItem.jsx'
import NoticeBox from '../components/card/NoticeBox.jsx'
import SearchBar from '../components/form/SearchBar.jsx'
import DirectionIcon from '../components/icon/DirectionIcon.jsx'
import FooterBar from '../components/layout/FooterBar.jsx'
import LoginBarDesktop from '../components/layout/LoginBarDesktop.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import MenuBarDesktop from '../components/navigation/MenuBarDesktop.jsx'
import PopularMenu from '../components/navigation/PopularMenu.jsx'
import {
  CALENDAR_EXAMPLE,
  NOTICES,
  POPULAR_MENUS,
  SCHOLARSHIP_CARDS,
  SERVICE_CARDS,
} from '../data/exampleData.js'
import { useNow } from '../hooks/useNow.js'
import { getScheduleStatus } from '../utils/schedule.js'
import './MainPage.css'

const SCHOLARSHIP_TABS = ['장학금 신청', '학자금대출']

function MainPage() {
  const [popularMenu, setPopularMenu] = useState(POPULAR_MENUS[0])
  const [scholarshipTab, setScholarshipTab] = useState(SCHOLARSHIP_TABS[0])
  const now = useNow()
  const openCards = SCHOLARSHIP_CARDS.filter(({ schedule }) => getScheduleStatus(schedule, now).key !== 'closed')
  const emptyCards = openCards.length === 0 && <p className="main-page__empty">지금 신청할 수 있는 장학금이 없습니다.</p>

  const scholarshipTabs = (
    <div className="main-page__tabs">
      {SCHOLARSHIP_TABS.map((tab) => (
        <PopularMenu className="popular-menu--fill" active={tab === scholarshipTab} onClick={() => setScholarshipTab(tab)} key={tab}>
          {tab}
        </PopularMenu>
      ))}
    </div>
  )

  return (
    <div className="main-page">
      <SiteHeader />

      <nav className="main-page__popular" aria-label="많이 찾는 메뉴">
        {POPULAR_MENUS.map((menu) => (
          <PopularMenu className="popular-menu--fill main-page__popular-item" active={menu === popularMenu} onClick={() => setPopularMenu(menu)} key={menu}>
            {menu}
          </PopularMenu>
        ))}
      </nav>

      <main>
        <section className="main-page__hero">
          <div className="main-page__search">
            <SearchBar />
            <MenuBarDesktop className="main-page__menu" />
          </div>
          <LoginBarDesktop className="main-page__login" />
        </section>

        {/* 모바일 카드: 탭 아래로 쌓인다. 일정은 안내 문구 뒤에 나온다. */}
        <section className="main-page__cards-mobile">
          {scholarshipTabs}
          <div className="main-page__card-stack">
            {emptyCards}
            {openCards.map((card) => (
              <CardItem variant="mobile" now={now} key={card.title} {...card} />
            ))}
          </div>
        </section>

        {/* 데스크탑: 일정과 카드가 나란하다. */}
        <section className="main-page__schedule-row">
          <Calendar className="main-page__calendar" {...CALENDAR_EXAMPLE} />
          <div className="main-page__scholarship">
            {scholarshipTabs}
            <div className="main-page__card-row">
              {emptyCards}
              {openCards.map((card) => (
                <CardItem className="main-page__card" variant="desktop" now={now} key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className="main-page__banner">
          <picture>
            <source media="(min-width: 1280px)" srcSet={bannerDesktop} />
            <img className="main-page__banner-image" src={bannerMobile} alt="" />
          </picture>
          <div className="main-page__banner-text">
            <p>
              국가장학금과 학자금대출은 국민의 세금인 <strong>국가예산</strong>으로 운영되며, 학자금지원구간 등에 따라 차등하여 지원합니다.
            </p>
            <p>
              학자금지원구간은 부ㆍ모ㆍ본인의 <strong>소득</strong>평가액과 재산의 소득환산액, <strong>형제자매 수</strong>에 따른 공제액을 반영하여 산정합니다.
            </p>
          </div>
        </section>

        <section className="main-page__calendar-mobile">
          <PageInfoHeading className="main-page__heading">일정 확인하기</PageInfoHeading>
          <Calendar {...CALENDAR_EXAMPLE} />
        </section>

        <section className="main-page__services">
          <div className="main-page__services-title">
            <PageInfoHeading className="main-page__heading">자주 찾는 서비스</PageInfoHeading>
            <DirectionIcon direction="right" />
          </div>
          <div className="main-page__service-row">
            {SERVICE_CARDS.map((card) => (
              <CardItem className="main-page__service-card" variant="service" key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="main-page__notices-mobile">
          <NoticeBox tabs={['공지사항', '홍보영상', '재단동정', '보도자료']} notices={NOTICES} />
        </section>

        <section className="main-page__notices">
          <NoticeBox className="main-page__notice" tabs={['공지사항', '홍보영상']} notices={NOTICES} />
          <NoticeBox className="main-page__notice" tabs={['재단동정', '보도자료']} notices={NOTICES} />
        </section>
      </main>

      <div className="main-page__sites">
        <FooterPopupButton>정부기관</FooterPopupButton>
        <FooterPopupButton>관련기관</FooterPopupButton>
      </div>

      <div className="main-page__footer">
        <FooterBar className="main-page__footer-bar" />
      </div>
    </div>
  )
}

export default MainPage
