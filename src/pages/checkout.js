import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import styled from "styled-components"
import AdressForm from "../components/AdressForm"
import { useSelector } from "react-redux"
import CheckoutCart from "../components/CheckoutCart"
import { Link } from "gatsby"

const CheckoutPage = () => {
  const items = useSelector(state => state.cart.items)
  const itemsArray = Object.values(items)
  const cartIsFull = !!itemsArray.length

  const totalPrice = cartIsFull
    ? itemsArray.map(item => item.quantity * item.price).reduce((a, b) => a + b)
    : 0

  return (
    <Layout>
      <Seo title="Twoje konto" />
      <Wrapper className="page-size-vertical  ">
        {cartIsFull ? (
          <div className="padding-top-page">
            <h1>Płatność</h1>
            <CheckoutCart itemsArray={itemsArray} totalPrice={totalPrice} />
            <AdressForm isCheckout={true} />
            <button
              className="btn btn-sharp btn-outline-dark w-100 mt-4 mb-1"
              disabled
            >
              ZAPŁAĆ
            </button>
            <p className="lead text-muted mb-4 text-center">
              Koniec wersji demonstracyjnej
            </p>
          </div>
        ) : (
            <div className="w-100 h-100 d-flex-column-c my-auto central-container">
            <p className="lead text-muted">Twój koszyk jest pusty.</p>
            <p>Zapraszamy do zakupów.</p>
            <Link to="/" className="btn btn-outline-dark btn-sharp">
              Strona główna
            </Link>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  & > div {
    width: 50%;
    min-width: 700px;
  }

  @media screen and (max-width: 768px) {
    & > div {
      width: 100%;
      padding-left: 1rem;
      padding-right: 2rem;
      min-width: 0;
    }
  }

  .item {
    border-bottom: 1px solid black;
    padding-top: 1rem;
    padding-bottom: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .small-cart {
    background-color: whitesmoke;
  }

  .total-text {
    margin-top: 2rem;
    font-size: 22px;
    text-align: end;
  }
`

export default CheckoutPage
