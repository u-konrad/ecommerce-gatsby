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
        <div className="sidebar ">
          <ul>
            <li className="category-item mb-2">
              <Link to={`/${linkGender}`}>
                <strong>{titleGender.toUpperCase()}</strong>
              </Link>
            </li>
            {categories.map(category => (
              <li key={category} className="category-item">
                <Link to={`/${linkGender}/${category}`}>
                  {capitalize(category)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-panel ">
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

  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .category-item {
    padding-bottom: 15px;
  }
  .category-item a:hover {
    text-decoration: underline;
  }

  .sidebar {
    position: fixed;
    top: calc(var(--height-navbar) + var(--padding-top-page));
    left: max(calc((100vw - var(--width-page)) / 2), 3rem);
  }

  .items-panel {
    grid-column: 3/-1;
    grid-row: 1/1;
  }

  .items-container {
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 1rem; */

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .grid-item {
    width: 100%;
  }

  .list-img {
    /* height: 500px; */
    width: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out;
    aspect-ratio: 2/3;
  }

  @media screen and (max-width: 1170px) {
    .items-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .items-panel {
      grid-column: 1/-1;
      grid-row: 1/1;
    }

    .sidebar {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .items-container {
      grid-template-columns: 1fr;
    }
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
          gatsbyImageData(width: 400, layout: CONSTRAINED, quality: 85)
        }
        gender
        id
      }
    }
  }
`

export default CategoryTemplate
