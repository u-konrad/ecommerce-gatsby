import React from "react"
import { Fragment } from "react"
import { Link } from "gatsby"
import { capitalize, convertGender } from "../utils/utils"
import styled from "styled-components"

const Breadcrumb = ({ gender, category, lastIsActive = false }) => {
  return (
    <Wrapper aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Główna</Link>
        </li>

        {!!category ? (
          <Fragment>
            <li class="breadcrumb-item">
              <Link to={`/${convertGender(gender).nounPlural}`}>
                {capitalize(convertGender(gender).nounSingular)}
              </Link>
            </li>
            {!lastIsActive ? (
              <li class="breadcrumb-item active" aria-current="page">
                {capitalize(category)}
              </li>
            ) : (
              <Link
                class="breadcrumb-item"
                aria-current="page"
                to={`/${convertGender(gender).nounPlural}/${category}`}
              >
                {capitalize(category)}
              </Link>
            )}
          </Fragment>
        ) : (
          <li class="breadcrumb-item active" aria-current="page">
            {capitalize(convertGender(gender).nounSingular)}
          </li>
        )}
      </ol>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  font-size: 14px;

  .breadcrumb-item + .breadcrumb-item::before {
    color: var(--clr-accent);
  }


`

export default Breadcrumb
