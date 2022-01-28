import React from "react"
import { MdClose } from "react-icons/md"
import { Link } from "gatsby"

const SearchOverlay = ({ setQuery, setSearchOpen, filteredItems,query }) => {
  return (
    <div className="search-overlay">
      <button
        className="close-btn btn-icon"
        onClick={() => {
          setQuery("")
          setSearchOpen(false)
        }}
      >
        <MdClose />
      </button>
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoFocus
      ></input>
      <div className="search-container">
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchOverlay
