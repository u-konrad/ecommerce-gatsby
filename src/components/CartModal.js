import React from "react"
import { Modal } from "react-bootstrap"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"

const CartModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body style={{ borderRadius: 0 }} className="p-5 ">
        <button
          className="position-absolute btn-icon"
          style={{ top: "10px", right: "10px",fontSize:'20px' }}
          onClick={handleClose}

        >
          <MdClose />
        </button>
        <p className="lead text-center mb-3">Produkt dodany do koszyka!</p>
        <Link className="btn btn-dark btn-sharp w-100 mb-2" to="/cart">
          Przejdź do płatności
        </Link>
        <button
          className="btn btn-outline-dark btn-sharp w-100 "
          onClick={handleClose}
        >
          Kontynuuj zakupy
        </button>
      </Modal.Body>
    </Modal>
  )
}

export default CartModal
