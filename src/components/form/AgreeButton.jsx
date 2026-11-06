import agreeChecked from '../../assets/icons/agree-checked.png'
import agreeDefault from '../../assets/icons/agree-default.png'
import './AgreeButton.css'

/**
 * children: 체크박스 옆에 보이는 문구. Figma 동의 버튼 (예: '개인정보 수집·이용 동의')
 * label: 문구 없이 체크박스만 쓸 때 화면 읽기 프로그램이 읽어 줄 이름. 화면에는 보이지 않는다.
 * checked, defaultChecked, onChange, required 등은 체크박스에 그대로 전달한다.
 */
function AgreeButton({ label = '동의', className = '', children, ...props }) {
  return (
    <label className={`agree-button ${className}`.trim()}>
      <span className="agree-button__box">
        <input className="agree-button__input" type="checkbox" aria-label={children ? undefined : label} {...props} />
        <img className="agree-button__image agree-button__image--default" src={agreeDefault} alt="" />
        <img className="agree-button__image agree-button__image--checked" src={agreeChecked} alt="" />
      </span>
      {children && <span className="agree-button__label">{children}</span>}
    </label>
  )
}

export default AgreeButton
