import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { capitalize, convertGenderToPl } from "../utils/utils"

const ProductPage = ({ data }) => {
  const { name, img, category, gender, price } = data.contentfulClothing

  return (
    <Layout>
      <Wrapper className="page">
        <div className="main-container">
          <GatsbyImage className="product-img" alt={name} image={getImage(img)} />
          <div className="info-container">
            <p>
              {capitalize(category)} {convertGenderToPl(gender)}
            </p>
            <h1>{name}</h1>
            <h3>{price} PLN</h3>
            <button className="btn btn-dark">Dodaj do koszyka</button>
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

  .product-img{
    height: 750px;
    width: 500px;
    object-fit: cover;
  }

  .btn{
      border-radius: 0;
  }
`

export default ProductPage
