import { useEffect, useId, useRef, useState } from 'react'
import Button from '../button/Button.jsx'
import SiteIcon from '../icon/SiteIcon.jsx'
import './PopupScreen.css'

// Figma 팝업화면에 적힌 문구. 다른 용어를 설명할 때는 title과 children을 넘긴다.
const INCOME_AMOUNT_HELP = (
  <>
    <p>
      소득인정액은 학자금 지원구간을 산정하기 위해 가구의 소득과 재산을 일정한 기준에 따라 계산한 금액입니다.
      사회보장정보시스템을 통해 조사된 가구원의 소득·재산·금융자산·부채 등을 반영하여 산정합니다.
    </p>
    <p className="popup-screen__subtitle">산정 방식</p>
    <p>소득인정액 = 월 소득평가액 + 재산의 월 소득환산액</p>
    <ul className="popup-screen__list">
      <li>월 소득평가액: 근로소득, 사업소득, 재산소득, 연금소득 등 가구의 소득을 기준에 따라 산정한 금액</li>
      <li>재산의 월 소득환산액: 보유 재산에서 기본공제액과 부채 등을 반영한 후 소득환산율을 적용하여 산정한 금액</li>
    </ul>
  </>
)

/**
 * Figma 팝업화면. 화면 아래에 붙어 올라오는 용어 도움말이다.
 * open: 열림 여부
 * size: 데스크탑 창 너비. 'wide'(소득인정액) | 'medium'(가구원)
 * onClose: 확인, 닫기 버튼, Esc 키로 닫혔을 때 불린다. 여기서 open을 false로 바꾼다.
 * 브라우저 기본 대화상자(dialog)를 써서, 닫으면 포커스가 열기 전의 칸으로 돌아간다.
 * 대화상자를 열지 못하면 같은 내용을 글자 툴팁으로 보여 준다 (F-04).
 */
function PopupScreen({ size = 'wide', open = false, onClose, title = '소득인정액이란?', className = '', children = INCOME_AMOUNT_HELP }) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const [isFallback, setIsFallback] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) {
      try {
        dialog.showModal()
      } catch {
        // 대화상자를 열지 못했다는 사실은 effect 안에서만 알 수 있다.
        // oxlint-disable-next-line react/set-state-in-effect
        setIsFallback(true)
      }
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  const close = () => dialogRef.current.close()

  if (isFallback && open) {
    return (
      <div className="popup-screen__tooltip" role="tooltip">
        <strong>{title}</strong>
        <div>{children}</div>
        <button type="button" className="popup-screen__tooltip-close" onClick={onClose}>
          닫기
        </button>
      </div>
    )
  }

  return (
    <dialog ref={dialogRef} className={`popup-screen popup-screen--${size} ${className}`.trim()} aria-labelledby={titleId} onClose={onClose}>
      <div className="popup-screen__header">
        <SiteIcon name="help" />
        <h2 className="popup-screen__title" id={titleId}>
          {title}
        </h2>
      </div>
      <div className="popup-screen__body">{children}</div>
      <Button className="popup-screen__confirm" onClick={close}>
        확인
      </Button>
      <button type="button" className="popup-screen__close" aria-label="닫기" onClick={close}>
        <SiteIcon name="close" />
      </button>
    </dialog>
  )
}

export default PopupScreen
