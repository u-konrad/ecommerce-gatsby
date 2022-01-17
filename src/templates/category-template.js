import React from "react"
import { graphql } from "gatsby"

const CategoryTemplate = ({ data, pageContext }) => {

    console.log(data)
  return (
    <div>
        <h2>{pageContext.category}</h2>
        <div>{data.toString()} </div>
      
    </div>
  )
}

export const query = graphql`
  query GetClothingForCategory($category: String, $gender: String) {
    allContentfulClothing(
      filter: { category: { eq: $category }, gender: { eq: $gender } }
    ) {
      nodes {
        price
        name
        img {
          gatsbyImageData
        }
      }
    }
  }
`

export default CategoryTemplate
