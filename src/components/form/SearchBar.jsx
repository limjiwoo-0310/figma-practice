import DirectionIcon from '../icon/DirectionIcon.jsx'
import SiteIcon from '../icon/SiteIcon.jsx'
import './SearchBar.css'

/**
 * Figma 검색창.
 * categories: 검색 범위 목록. Figma에는 '전체'만 있어서 나머지는 넘겨받는다.
 * onSearch: 검색할 때 { category, query }를 받아 실행할 함수
 * 너비는 감싸는 부모가 정한다.
 */
function SearchBar({ categories = ['전체'], placeholder = '정보를 검색해 보세요', onSearch, className = '', ...props }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSearch?.({ category: data.get('category'), query: data.get('query') })
  }

  return (
    <form className={`search-bar ${className}`.trim()} role="search" onSubmit={handleSubmit} {...props}>
      <span className="search-bar__category">
        <select className="search-bar__select" name="category" aria-label="검색 범위">
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <DirectionIcon className="search-bar__arrow" direction="down" variant="category" />
      </span>
      <span className="search-bar__divider" aria-hidden="true" />
      <input className="search-bar__input" type="search" name="query" placeholder={placeholder} aria-label="검색어" />
      <button className="search-bar__submit" type="submit" aria-label="검색">
        <SiteIcon name="search-primary" />
      </button>
    </form>
  )
}

export default SearchBar
