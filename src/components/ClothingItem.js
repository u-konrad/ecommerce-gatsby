import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const ClothingItem = ({ price, img, name }) => {
  return (
    <div>
      <div>
        <GatsbyImage
          className="list-img"
          image={getImage(img)}
          alt=""
          width="300px"
        />
      </div>
      <h5 className="mt-2">{name}</h5>
      <p>{price} PLN</p>
    </div>
  )
}

export default ClothingItem
