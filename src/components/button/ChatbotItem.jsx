import { useEffect, useRef, useState } from 'react'
import chatbot from '../../assets/images/chatbot.png'
import './ChatbotItem.css'

/**
 * href: 상담 화면 주소
 * 마우스를 쓰는 화면: 마우스를 올리거나 키보드로 선택하면 안내 문구가 왼쪽으로 펼쳐지고, 누르면 이동한다.
 * 터치 화면: 첫 번째 누름에 안내 문구가 펼쳐지고, 두 번째 누름에 이동한다. 바깥을 누르면 접힌다.
 */
function ChatbotItem({ href = '#', className = '', onClick, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    function closeOnOutsidePress(event) {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress)
  }, [isOpen])

  function handleClick(event) {
    onClick?.(event)

    if (!isOpen && window.matchMedia('(hover: none)').matches) {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  const openClass = isOpen ? 'chatbot-item--open' : ''

  return (
    <a
      className={`chatbot-item ${openClass} ${className}`.replace(/\s+/g, ' ').trim()}
      href={href}
      ref={rootRef}
      onClick={handleClick}
      {...props}
    >
      <span className="chatbot-item__guide">
        <span className="chatbot-item__text">
          <span>챗봇상담: 24시</span>
          <span>채팅상담: 9시~18시</span>
        </span>
      </span>
      <img className="chatbot-item__image" src={chatbot} alt="" />
    </a>
  )
}

export default ChatbotItem
