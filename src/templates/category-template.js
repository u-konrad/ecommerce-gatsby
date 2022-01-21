import React, { Fragment,useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { categoriesF, categoriesM } from "../constants/categories"
import styled from "styled-components"
import ClothingItem from "../components/ClothingItem"
import { capitalize, convertGender } from "../utils/utils"
import Breadcrumb from "../components/Breadcrumb"
import CartModal from "../components/CartModal"


const CategoryTemplate = ({ data, pageContext }) => {
  const linkGender = convertGender(pageContext.gender).nounPlural
  const titleGender = convertGender(pageContext.gender).adj

  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)

  let title
  if (!pageContext.category) {
    title = "UBRANIA " + titleGender.toLocaleUpperCase()
  } else {
    title = (pageContext.category + " " + titleGender).toLocaleUpperCase()
  }

  const categories = pageContext.gender === "male" ? categoriesM : categoriesF

  return (
    <Layout>
      <Wrapper className="page-size-horizontal page-top mb-5">
        <div className="sidebar ">
          <ul>
            <li className="category-item mb-2">
              <Link to={`/${linkGender}`}>
                <strong>
                  {convertGender(pageContext.gender).nounSingular.toUpperCase()}
                </strong>
              </Link>
            </li>
            <hr></hr>

            {categories.map(category => (
              <li key={category} className="category-item">
                <Link to={`/${linkGender}/${category}`}>
                  {capitalize(category)}
                </Link>
              </li>
            ))}
          </ul>
          <hr></hr>
        </div>
        <div className="items-panel ">
          <Breadcrumb
            category={pageContext.category}
            gender={pageContext.gender}
          />
          <h2 className="mb-3">{title}</h2>
          <div className="items-container">
            {data.allContentfulClothing.nodes.map(item => (
              <ClothingItem item={item} showModal={setShowModal} />
            ))}{" "}
          </div>
        </div>
        <CartModal show={showModal} handleClose={handleClose}/>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  --width-sidebar: 150px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: var(--padding-top-page);

  .category-item {
    padding-bottom: 15px;
  }

  .category-item:first-of-type {
    padding-bottom: 0;
  }

  .category-item:last-of-type {
    padding-bottom: 0;
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
    padding-right: 3rem;
  }

  .items-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .grid-item {
    width: 100%;
  }

  .img-container{
    overflow: hidden;
  }

  .list-img {
    /* height: 500px; */
    width: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out;
    aspect-ratio: 2/3;
  }

  .panel {
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    color: black;
    transition: 0.5s ease-in-out; 
    z-index: 100;
    opacity:0
  }

  .img-container:hover .panel {
    opacity:0.8
  }



  @media screen and (max-width: 1170px) {
    .items-container {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .items-panel {
      grid-column: 1/-1;
      grid-row: 1/1;
      padding-right: 0;
    }
    .items-container {
      grid-column-gap: 0.2rem;
    }
    .sidebar {
      display: none;
    }

    .items-panel h2 {
      font-size: 22px;
      padding-left: var(--padding-x-mobile);
    }

    .grid-item h5 {
      font-size: 16px;
      padding-left: var(--padding-x-mobile);
    }

    .grid-item p {
      font-size: 16px;
      padding-left: var(--padding-x-mobile);
    }
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
        category
      }
    }
  }
`

export default CategoryTemplate
