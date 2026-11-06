import './GradeTable.css'

/**
 * Figma 성적 기준표.
 * rows: { label, value } 목록
 * 너비는 감싸는 부모가 정한다.
 */
function GradeTable({ rows, className = '', ...props }) {
  return (
    <div className={`grade-table ${className}`.trim()} {...props}>
      <table className="grade-table__table">
        <thead>
          <tr>
            <th scope="col">구분</th>
            <th scope="col">성적기준</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, value }) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GradeTable
