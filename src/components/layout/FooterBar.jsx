import snsX from '../../assets/icons/sns-2.png'
import snsBlog from '../../assets/icons/sns-3.png'
import snsFacebook from '../../assets/icons/sns-facebook.png'
import snsInstagram from '../../assets/icons/sns-instagram.png'
import './FooterBar.css'

const TERMS = ['개인정보처리방침', '이용약관', '이메일집단수집거부', '웹 접근성 품질인증 마크 획득', '저작권정책']

const INFO_LINKS = ['찾아오시는 길 >', '조직도 및 부서안내 >']

const SNS_LINKS = [
  { src: snsInstagram, label: '인스타그램' },
  { src: snsFacebook, label: '페이스북' },
  { src: snsX, label: 'X' },
  { src: snsBlog, label: '블로그' },
]

/**
 * Figma 푸터바-모바일, 푸터바-데스크탑. 내용이 같아 하나로 만들고 1280px부터 가로로 배치한다.
 * 링크의 실제 주소는 아직 없어 href는 '#'이다.
 */
function FooterBar({ className = '', ...props }) {
  return (
    <footer className={`footer-bar ${className}`.trim()} {...props}>
      <div className="footer-bar__left">
        <address className="footer-bar__address">
          {/* 실제 이름을 코드에 넣지 않으려고 예시 값을 쓴다. Figma의 값은 실제 이름이다. */}
          이사장: 홍길동(예시)
          <br />
          사업자번호: 104-82-10922
          <br />
          주소: (41200) 대구광역시 동구 신암로 125(신암동 819-1) 한국장학재단
        </address>
        <p className="footer-bar__call">
          <a className="footer-bar__call-number" href="tel:1599-2000">
            콜센터 1599-2000
          </a>
          <span className="footer-bar__call-note">(유료, ARS : 365일 24시간 운영, 상담원 연결 : 평일 09시 ~ 18시)</span>
        </p>
        <ul className="footer-bar__terms">
          {TERMS.map((term) => (
            <li key={term}>
              <a className="footer-bar__term" href="#">
                {term}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bar__right">
        <div className="footer-bar__links">
          <ul className="footer-bar__info">
            {INFO_LINKS.map((label) => (
              <li key={label}>
                <a className="footer-bar__info-link" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer-bar__sns">
            {SNS_LINKS.map(({ src, label }) => (
              <li key={label}>
                <a className="footer-bar__sns-link" href="#" aria-label={label}>
                  <img className="footer-bar__sns-image" src={src} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer-bar__copyright">COPYRIGHT ⓒ KOREA STUDENT AID FOUNDATION. ALL RIGHT RESERVED.</p>
      </div>
    </footer>
  )
}

export default FooterBar
