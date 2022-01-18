import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { categoriesF, categoriesM } from "../constants/categories"
import styled from "styled-components"
import ClothingItem from "../components/ClothingItem"
import { capitalize, convertGenderToPl } from "../utils/utils"

const CategoryTemplate = ({ data, pageContext }) => {
  const linkGender = pageContext.gender === "male" ? "men" : "women"
  const titleGender = convertGenderToPl(pageContext.gender)

  let title
  if (!pageContext.category) {
    title = "UBRANIA " + titleGender.toLocaleUpperCase()
  } else {
    title = (pageContext.category + " " + titleGender).toLocaleUpperCase()
  }

  const categories = pageContext.gender === "male" ? categoriesM : categoriesF

  return (
    <Layout>
      <Wrapper className="page">
        <div className="sidebar pt-5">
          <ul>
            <li className="category-item mb-2">
              <Link to={`/${linkGender}`}>
                <strong>Wszystko</strong>
              </Link>
            </li>
            {categories.map(category => (
              <li key={category} className="category-item ms-4">
                <Link to={`/${linkGender}/${category}`}>
                  {capitalize(category)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-panel">
          <h2 className="mb-3">{title}</h2>
          <div className="items-container">
            {data.allContentfulClothing.nodes.map(item => (
              <ClothingItem {...item} />
            ))}{" "}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  --width-sidebar: 150px;

  .category-item {
    padding-bottom: 15px;
  }
  .category-item a:hover {
    text-decoration: underline;
  }

  .sidebar {
    position: fixed;
    top: var(--height-navbar);
    left: 3rem;
  }

  .items-panel {
    margin-left: var(--width-sidebar);
    padding-left: 100px;
  }

  .items-container {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 1rem;
  }

  .list-img {
    height: 500px;
    width: 350px;
    object-fit: cover;
    transition: 0.5s ease-in-out;
  }

  .list-img:hover {
    opacity: 0.5;
  }
`

export const query = graphql`
  query GetClothingForCategory($categoryRegex: String, $gender: String) {
    allContentfulClothing(
      filter: { category: { regex: $categoryRegex }, gender: { eq: $gender } }
    ) {
      nodes {
        price
        name
        img {
          gatsbyImageData(width: 350, layout: CONSTRAINED, quality: 85)
        }
        gender
        id
      }
    }
  }
`

export default CategoryTemplate
