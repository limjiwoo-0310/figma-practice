import Button from '../button/Button.jsx'
import Icon from '../icon/Icon.jsx'
import './LoginBarDesktop.css'

const SERVICES = [
  { icon: 'scholarship', label: '장학금 신청' },
  { icon: 'loan', label: '학자금 대출' },
  { icon: 'employment', label: '서류 첨부' },
  { icon: 'terms', label: '동의서 작성' },
]

/**
 * onLogin: 로그인 버튼을 눌렀을 때 실행할 함수
 * 너비는 감싸는 부모가 정한다.
 */
function LoginBarDesktop({ onLogin, className = '', ...props }) {
  return (
    <div className={`login-bar-desktop ${className}`.trim()} {...props}>
      <p className="login-bar-desktop__message">로그인을 하고 아래 서비스를 편리하게 이용하세요</p>
      <ul className="login-bar-desktop__services">
        {SERVICES.map(({ icon, label }) => (
          <li className="login-bar-desktop__service" key={label}>
            <Icon name={icon} size="small" />
            {label}
          </li>
        ))}
      </ul>
      <Button className="login-bar-desktop__button" onClick={onLogin}>
        로그인
      </Button>
    </div>
  )
}

export default LoginBarDesktop
