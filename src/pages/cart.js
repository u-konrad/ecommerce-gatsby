import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import { Link } from "gatsby"
import Seo from "../components/Seo"


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
            <Seo title="Kup ubrania online!" />
      <Wrapper className="page-size-horizontal page-size-vertical">
        {cartIsFull ? (
          <div className="padding-top-page">
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
                <button className="w-100 btn btn-dark btn-sharp" onClick={()=>alert('Koniec wersji demonstracyjnej')}>
                  Do kasy
                </button>
              </div>
            </div>
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
    background-color: var(--clr-bg-2);
  }

  @media screen and (max-width: 1200px) {
    .items-container,
    .payment-container {
      width: 100%;
    }

  }
`

export default CartPage
