import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

const ClothingItem = ({ price, img, name,id }) => {
  return (
    <Link to={`/${id}`}>
      <div>
        <GatsbyImage
          className="list-img"
          image={getImage(img)}
          alt=""
        />
      </div>
      <h5 className="mt-2">{name}</h5>
      <p>{price} PLN</p>
    </Link>
  )
}

export default ClothingItem
