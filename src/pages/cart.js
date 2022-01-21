import React, { Fragment } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import { Link } from "gatsby"

const delivery = 0

const CartPage = () => {
  const items = useSelector(state => state.cart.items)
  const itemsArray = Object.values(items)
  const cartIsFull = !!itemsArray.length

  const totalPrice = cartIsFull
    ? itemsArray.map(item => item.quantity * item.price).reduce((a, b) => a + b)
    : 0

  console.log(totalPrice)

  return (
    <Layout>
      <Wrapper className="page-size-horizontal page-top">
        {cartIsFull ? (
          <div className="page-wrapper">
            <h1 className="mb-3 ps-4 ps-md-5 pe-lg-5">Koszyk</h1>
            <div className="top-container ">
              <div className="items-container px-4 ps-md-5 pe-lg-5">
                {itemsArray.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
              <div className="payment-container py-5 px-4 px-sm-5">
                <div className="d-flex justify-content-between mb-4">
                  <span>Cena produktów:</span>
                  <span>{totalPrice} PLN</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>Koszt dostawy:</span>
                  <span>{delivery} PLN</span>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between lead mb-5">
                  <span>Łącznie</span>
                  <span>
                    <strong>{totalPrice + delivery} PLN</strong>
                  </span>
                </div>
                <button className="w-100 btn btn-dark btn-sharp">
                  Do kasy
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center empty-container">
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

.page-wrapper{
  padding-top: var(--padding-top-page);
}

.empty-container{
  min-height: calc(100vh - var(--height-navbar) - 72px );

}

  .top-container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .items-container {
    flex-grow: 1;
  }

  .payment-container {
    width: 450px;
    background-color: var(--clr-bg);
  }

  @media screen and (max-width: 1170px) {
    .items-container,
    .payment-container {
      width: 100%;
    }
    .page-wrapper{
    padding-top: 25px;
  }
  }

`

export default CartPage
