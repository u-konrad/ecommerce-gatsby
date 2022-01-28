import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { categoriesF, categoriesM } from "../constants/categories"
import styled from "styled-components"
import ClothingItem from "../components/ClothingItem"
import { capitalize, convertGender } from "../utils/utils"
import Breadcrumb from "../components/Breadcrumb"
import CartModal from "../components/CartModal"
import Seo from "../components/Seo"
import CustomSelect from "../components/CustomSelect"

const sortTypes = [
  { value: "DESC", label: "Cena malejąco" },
  { value: "ASC", label: "Cena rosnąco" },
]

const CategoryTemplate = ({ data, pageContext }) => {
  const linkGender = convertGender(pageContext.gender).nounPlural
  const titleGender = convertGender(pageContext.gender).adj

  const [showModal, setShowModal] = useState(false)
  const [sortType, setSortType] = useState({
    value: "DESC",
    label: "Cena malejąco",
  })

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
      <Seo title="Kup ubrania online!" />
      <Wrapper className="page-size-horizontal padding-top-page page-size-vertical mb-5">
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
        </div>
        <div className="items-panel ">
          <Breadcrumb
            category={pageContext.category}
            gender={pageContext.gender}
          />
          <div className="d-flex justify-content-between flex-column flex-sm-row">
            <h2 className="mb-3">{title}</h2>
            <div className="d-flex-row-s align-items-baseline ps-3 ps-sm-0 pe-4 pe-md-0">
              <p className="d-inline-block  ">
                <small>Sortuj:</small>{" "}
              </p>
              <CustomSelect
                onChange={e => setSortType(e)}
                value={sortType}
                options={sortTypes}
                placeholder="Sortuj według"
                className=" mb-3  small"
              />
            </div>
          </div>
          <div className="items-container">
            {data.allContentfulClothing.nodes
              .sort((a, b) => {
                if (sortType.value === "ASC") {
                  return a.price - b.price
                } else {
                  return b.price - a.price
                }
              })
              .map(item => (
                <ClothingItem item={item} showModal={setShowModal} />
              ))}{" "}
          </div>
        </div>
        <CartModal show={showModal} handleClose={handleClose} />
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

  @media screen and (max-width: 992px) {
    .sidebar a {
      font-size: 14px;
    }
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

  .img-container {
    overflow: hidden;
  }

  .list-img {
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
    opacity: 0;
  }

  .img-container:hover .panel {
    opacity: 0.8;
  }

  @media screen and (max-width: 1200px) {
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
      font-size: 26px;
      padding-left: var(--padding-left-mobile);
    }

    .grid-item h5 {
      font-size: 16px;
      padding-left: var(--padding-left-mobile);
    }

    .grid-item p {
      font-size: 16px;
      padding-left: var(--padding-left-mobile);
    }

    .breadcrumb {
      padding-left: var(--padding-left-mobile);
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
