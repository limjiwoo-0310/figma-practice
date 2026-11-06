import stepThumbCurrent from '../../assets/icons/step-thumb-current.png'
import stepThumb from '../../assets/icons/step-thumb.png'
import './StepBar.css'

/**
 * current: 현재 단계(1부터 시작). 값이 바뀌면 해당 단계의 동그라미가 파란색으로 바뀐다.
 * total: 전체 단계 수
 * labels: 동그라미 아래에 적을 단계 이름 목록. 생략할 수 있다. (예: ['정보 입력', '서류 제출', ...])
 * showCount: "1/4 단계" 글자를 보여 줄지 정한다.
 * 너비는 감싸는 부모가 정한다.
 */
function StepBar({ current = 1, total = 4, labels = [], showCount = true, className = '', ...props }) {
  const labeledClass = labels.length > 0 ? 'step-bar--labeled' : ''

  return (
    <div className={`step-bar ${labeledClass} ${className}`.replace(/\s+/g, ' ').trim()} {...props}>
      {showCount && (
        <p className="step-bar__count">
          {current}/{total} 단계
        </p>
      )}
      <ol className="step-bar__steps">
        {Array.from({ length: total }, (_, index) => {
          const isCurrent = index + 1 === current

          return (
            <li
              className={`step-bar__step ${isCurrent ? 'step-bar__step--current' : ''}`.trim()}
              aria-current={isCurrent ? 'step' : undefined}
              key={index}
            >
              <img className="step-bar__thumb" src={stepThumb} alt="" />
              <img className="step-bar__thumb step-bar__thumb--current" src={stepThumbCurrent} alt="" />
              {labels[index] ? (
                <span className="step-bar__label">{labels[index]}</span>
              ) : (
                <span className="step-bar__hidden-text">{index + 1}단계</span>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default StepBar
