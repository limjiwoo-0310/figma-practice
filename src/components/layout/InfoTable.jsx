import './InfoTable.css'

/**
 * 이름표와 값이 나란한 표. 신청정보, 동의 현황, 서류제출 현황에 쓴다.
 * rows: 줄 목록. 한 줄은 칸 목록이며 칸은 { label, value, labelSize, tight } 형태다.
 * labelSize: 'narrow' | 'default' | 'medium' | 'document' (모바일 기준 이름표 너비)
 * tight: 모바일에서 값 칸의 좌우 여백을 없앤다.
 * compact: 모바일에서 줄 높이를 내용에 맞춘다.
 */
function InfoTable({ rows, compact = false, className = '', ...props }) {
  const classNames = ['info-table', compact && 'info-table--compact', className].filter(Boolean).join(' ')

  return (
    <dl className={classNames} {...props}>
      {rows.map((cells, rowIndex) => (
        <div className="info-table__row" key={rowIndex}>
          {cells.map(({ label, value, labelSize = 'default', tight = false }) => (
            <div className="info-table__cell" key={label}>
              <dt className={`info-table__label info-table__label--${labelSize}`}>{label}</dt>
              <dd className={`info-table__value ${tight ? 'info-table__value--tight' : ''}`.trim()}>{value}</dd>
            </div>
          ))}
        </div>
      ))}
    </dl>
  )
}

export default InfoTable
