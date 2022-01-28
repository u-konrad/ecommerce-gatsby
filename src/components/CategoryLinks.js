import React, { Fragment } from "react"
import { capitalize } from "../utils/utils"
import { categoriesF, categoriesM } from "../constants/categories"
import { Link } from "gatsby"

const CategoryLinks = () => {
  return (
    <Fragment>
      <div className="gender-container">
        <Link to="/women" className="gender-link ">
          Kobieta
        </Link>
        <div className="submenu ">
          <ul className="cat-list ">
            {categoriesF.map(item => (
              <li key={item}>
                <Link to={`/women/${item}`}>{capitalize(item)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gender-container">
        <Link to="/men" className="gender-link ">
          Mężczyzna
        </Link>
        <div className="submenu ">
          {" "}
          <ul className="cat-list ">
            {categoriesM.map(item => (
              <li key={item}>
                <Link to={`/men/${item}`}>{capitalize(item)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overlay"></div>
    </Fragment>
  )
}

export default CategoryLinks
