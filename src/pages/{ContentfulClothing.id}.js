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
import Select from "../components/Select"


const ProductPage = ({ data }) => {
  const { name, img, category, gender, price, id } = data.contentfulClothing
  const dispatch = useDispatch()
  const [size, setSize] = useState("")
  const [promptIsVisible, setPromptVisible] = useState(false)

  const sizes = ["S", "M", "L", "XL"]

  const addToCartHandler = () => {
    if (!size) {
      setPromptVisible(true)
    } else {
      const newId = id + `-${size}`
      const itemToSend = { ...data.contentfulClothing, id: newId, size }
      dispatch(cartActions.addItem({ item: itemToSend }))
    }
  }

  const sizeSelectHandler = (value)=>{
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
            <p className="mb-1">
              {capitalize(category)} {convertGenderToPl(gender)}
            </p>
            <h1 className="mb-3">{name}</h1>
            <h3 className="mb-5">{price} PLN</h3>
            <div className="size-container position-relative">
              {/* <select
                className="size-select form-select"
                onChange={e => {
                  setSize(e.target.value)
                  if (e.target.value) setPromptVisible(false)
                }}
              >
                <option value="">Wybierz rozmiar</option>
                {sizes.map(size => (
                  <option value={size}>{size}</option>
                ))}
              </select> */}
              <Select
              />

              <p
                className={`prompt-text text-danger ${
                  promptIsVisible && "visible"
                }`}
              >
                <small>Wybierz odpowiedni rozmiar produktu.</small>
              </p>
            </div>
            <button className="btn btn-dark" onClick={addToCartHandler}>
              Dodaj do koszyka
            </button>
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

  .btn {
    border-radius: 0;
  }

  .prompt-text {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }
/* 
  .size-select {
    border-radius: 0 !important;
    width: 120px;
  }

  .size-select fieldset,
  .size-select label {
    border-color: black !important;
    color: black !important;
  } */
`

export default ProductPage
