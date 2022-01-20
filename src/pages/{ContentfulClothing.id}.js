import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { capitalize, convertGenderToPl } from "../utils/utils"
import { cartActions } from "../store/store"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Select from "react-select"
import { BiShoppingBag } from "react-icons/bi"

const ProductPage = ({ data }) => {
  const { name, img, category, gender, price, id } = data.contentfulClothing
  const dispatch = useDispatch()
  const [size, setSize] = useState("")
  const [promptIsVisible, setPromptVisible] = useState(false)

  const options = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ]

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     backgroundColor: 'red',

  //   }),
  // }

  const addToCartHandler = () => {
    if (!size) {
      setPromptVisible(true)
    } else {
      const newId = id + `-${size}`
      const itemToSend = { ...data.contentfulClothing, id: newId, size }
      dispatch(cartActions.addItem({ item: itemToSend }))
    }
  }

  const sizeSelectHandler = value => {
    setSize(value)
    if (value) setPromptVisible(false)
  }

  return (
    <Layout>
      <Wrapper className="page">
        <div className="main-container">
          <GatsbyImage
            className="product-img"
            alt={name}
            image={getImage(img)}
          />
          <div className="info-container">
            <p className="category-title mb-1">
              {capitalize(category)} {convertGenderToPl(gender)}
            </p>
            <h1 className="mb-4">{name}</h1>
            <h3 className="mb-3">{price} PLN</h3>
            <div className="button-container">
              <p
                className={`prompt-text text-danger mb-1 ${
                  promptIsVisible && "visible"
                }`}
              >
                <small>Wybierz rozmiar produktu.</small>
              </p>
              <Select
                options={options}
                placeholder={"Wybierz rozmiar"}
                classNamePrefix="react-select"
                onChange={e => sizeSelectHandler(e.value)}
              />

              <button
                className="btn btn-dark w-100 d-flex justify-content-center align-items-center mt-2"
                onClick={addToCartHandler}
              >
                <BiShoppingBag className="me-2" /> Do koszyka
              </button>
            </div>
          </div>
        </div>
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* height: calc(100vh-var); */
    /* padding-top: 100px; */
    padding-bottom: 100px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 100px;
  }

  .product-img {
    width: 500px;
    aspect-ratio: 3/4;
    object-fit: cover;
    border: 1px solid black;
  }

  .category-title{
    color: var(--clr-accent);
  }

  .btn {
    border-radius: 0;
  }

  .prompt-text {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }

  .size-select {
    border-radius: 0 !important;
    width: 200px;
  }
  .form-select:focus {
    border-color: black;
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
  }
  option {
    padding-left: 0.5rem;
  }

  .button-container {
    width: 250px;
  }

  .react-select__control {
    border-radius: 0;
    border-color: black;
    box-shadow: none;
  }

  .react-select__control:hover {
    border-color: black;
    box-shadow: 0 0 0 2px black;
    /* border: 2px solid black; */
  }

  .react-select__menu {
    border-radius: 0;
    background-color: #f5f5f5;
  }

  .react-select__option:hover {
    background-color: #e8e8e8;
  }

  .react-select__option--is-focused {
    background-color: #e8e8e8;
  }

  .react-select__option--is-selected {
    background-color: #808080;
  }

  .react-select__option--is-selected:hover {
    background-color: #909090;
  }
`

export default ProductPage
