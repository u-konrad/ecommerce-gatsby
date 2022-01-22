import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { cartActions } from "../store/store"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import CartModal from "../components/CartModal"
import CustomSelect from "../components/CustomSelect"
import Seo from "../components/Seo"
import  Breadcrumb  from "../components/Breadcrumb"

const sizes= [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
]

const ProductPage = ({ data }) => {
  const { name, img, category, gender, price, id } = data.contentfulClothing
  const dispatch = useDispatch()
  const [size, setSize] = useState("")
  const [promptIsVisible, setPromptVisible] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)

  const addToCartHandler = () => {
    if (!size) {
      setPromptVisible(true)
    } else {
      const newId = id + `-${size}`
      const itemToSend = { ...data.contentfulClothing, id: newId, size }
      dispatch(cartActions.addItem({ item: itemToSend }))
      setShowModal(true)
    }
  }

  const sizeSelectHandler = value => {
    setSize(value)
    if (value) setPromptVisible(false)
  }

  return (
    <Layout>
      <Seo title={name} description={`${name}. Kupuj online w Clothing.`} />
      <Wrapper className="page-size-vertical page-size-horizontal position-relative">
        <div className="main-container">
          <div className="img-container nav-padding-left">
            <GatsbyImage
              className="product-img"
              alt={name}
              image={getImage(img)}
            />
          </div>

          <div className="info-container nav-padding-right">
            <Breadcrumb gender={gender} category={category} lastIsActive/>
            <h1 className="mb-4">{name}</h1>
            <h3 className="mb-3">{price.toFixed(2)} PLN</h3>
            <div className="button-container">
              <p
                className={`prompt-text text-danger mb-1 ${
                  promptIsVisible && "visible"
                }`}
              >
                <small>Wybierz rozmiar produktu.</small>
              </p>
              <CustomSelect onChange={e => sizeSelectHandler(e.value)} options={sizes} placeholder="Wybierz rozmiar"/>
              <button
                className="btn btn-dark btn-sharp w-100 d-flex justify-content-center align-items-center mt-2"
                onClick={addToCartHandler}
              >
                <BiShoppingBag className="me-2" /> Do koszyka
              </button>
            </div>
          </div>
        </div>
        <CartModal show={showModal} handleClose={handleClose} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetClothingById($id: String) {
    contentfulClothing(id: { eq: $id }) {
      id
      name
      img {
        gatsbyImageData(width: 500, layout: CONSTRAINED, quality: 85)
      }
      category
      price
      gender
    }
  }
`

const Wrapper = styled.main`
  .main-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 100%;
    min-height: calc(100vh - var(--height-navbar));
  }

  .img-container {
    grid-column: 1/7;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  .info-container {
    grid-column: 8/-1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    .img-container {
      grid-column: 1/-1;
      padding-left: 0;
      align-items: center;
    }

    .info-container {
      grid-column: 1/-1;
      padding-left: var(--padding-left-mobile);
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    padding-top: 0 !important;
  }

  .product-img {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 3/4;
    object-fit: cover;
  }

  .category-title {
    color: var(--clr-accent);
  }

  .category-title:hover {
    color: var(--clr-accent-2);
  }

  .prompt-text {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }

  .button-container {
    width: 100%;
    max-width: 250px;
  }
`

export default ProductPage
