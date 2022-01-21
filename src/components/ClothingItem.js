import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { cartActions } from "../store/store"

const options = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
]

const ClothingItem = ({ item,showModal }) => {
  const dispatch = useDispatch()

  const addToCartHandler = size => {
    const newId = item.id + `-${size}`
    const itemToSend = { ...item, id: newId, size }
    dispatch(cartActions.addItem({ item: itemToSend }))
    showModal(true)
  }

  return (
    <div className="grid-item">
      <div className="img-container position-relative">
      <Link to={`/${item.id}`}>
        <GatsbyImage className="list-img" image={getImage(item.img)} alt="" /></Link>
        <div className="panel d-flex-column-c">
          <p>Dodaj do koszyka w rozmiarze:</p>
          <div onClick={e => {console.log('click')
            e.stopPropagation()}}>
            {options.map(size => (
              <button
                className="btn-icon me-3"
                onClick={event => {
                  addToCartHandler(size.value)
                }}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Link className="btn-icon" to={`/${item.id}`}>
      <h5 className="mt-2">{item.name}</h5>
      </Link>
      <p>{item.price} PLN</p>
    </div>
  )
}

export default ClothingItem
