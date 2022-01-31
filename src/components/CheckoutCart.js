import React from "react"
import {GiShoppingBag} from 'react-icons/gi'

const CheckoutCart = ({itemsArray,totalPrice}) => {
  return (
    <div className="my-5 small-cart p-4">
      <div className="d-flex-row-s align-items-baseline"><GiShoppingBag style={{fontSize:'22px'}}/><h3 className="ms-2 mb-2">Twoje zakupy</h3></div>

      {itemsArray.map(item => {
        return (
          <div className="item d-flex-row-b">
            <span className="lead">
              {item.name} - {item.size}
            </span>
            <span className="text-end">
              <small>
                {item.price.toFixed(2)} PLN X {item.quantity} ={" "}
              </small>{" "}
              <span className="lead ">
                <strong>{item.price.toFixed(2) * item.quantity} PLN</strong>
              </span>
            </span>
          </div>
        )
      })}
      <p className="total-text">
        SUMA: <strong>{totalPrice} PLN</strong>
      </p>
    </div>
  )
}

export default CheckoutCart
