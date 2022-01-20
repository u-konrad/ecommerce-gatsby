import React from "react"
import styled from "styled-components"
import { MdOutlineDelete, MdRemove } from "react-icons/md"
import { BsPlusLg } from "react-icons/bs"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { useDispatch } from "react-redux"
import { cartActions } from "../store/store"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const { price, img, name, id, quantity, size } = item

  const addHandler = () => {
    dispatch(cartActions.incrementItem({ id }))
  }

  const removeOneHandler = () => {
    dispatch(cartActions.decrementItem({ id }))
  }

  const removeAllHandler = () => {
    dispatch(cartActions.removeItem({ id }))
  }

  return (
    <Wrapper className="d-flex align-items-center justify-content-start py-2 mb-3">
      <GatsbyImage
        width="100"
        className="product-img"
        image={getImage(img)}
        alt=""
      />
      <div className=" py-1">
        <h6>{name}</h6>
        <p className="mb-0">Cena: {price} PLN</p>
        <p className="mt-0">
          Rozmiar: <strong>{size}</strong>
        </p>
        <div className="mt-auto">
          <p className="lead mb-1">Ilość: </p>
          <div
            style={{ width: "100px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <button
              className={`btn btn-sm  btn-outline-dark ${
                quantity === 1 ? "disabled" : ""
              }`}
              onClick={removeOneHandler}
            >
              <MdRemove />
            </button>
            <span className="lead">
              <strong>{quantity}</strong>
            </span>

            <button
              className={`btn btn-sm  btn-outline-dark ${
                quantity === 9 ? "disabled" : ""
              }`}
              onClick={addHandler}
            >
              <BsPlusLg />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-end ms-auto h-100 ">
        <p className="lead">{quantity * price} PLN</p>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={removeAllHandler}
        >
          <MdOutlineDelete />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid grey;
  height: 180px;

  .product-img {
    width: 100px;
    aspect-ratio: 2/3;
    object-fit: cover;
    margin-right: 2rem;
  }

  @media screen and (max-width: 576px) {
    .product-img {
      margin-right: 0.5rem;
    }
  }
`

export default CartItem
