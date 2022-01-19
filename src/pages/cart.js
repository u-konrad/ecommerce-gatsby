import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"

const CartPage = () => {
  const items = useSelector(state => state.cart.items)

  console.log(items)
  return (
    <Layout>
      <Wrapper className="page">
          <h1 className="mb-3">Koszyk</h1>
        <div className="items-container col-8">
          {Object.values(items).map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main``

export default CartPage
