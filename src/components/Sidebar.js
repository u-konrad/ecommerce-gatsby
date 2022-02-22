import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import { Accordion } from "react-bootstrap"
import { categoriesF, categoriesM } from "../constants/categories"
import { capitalize } from "../utils/utils"
import { MdClose } from "react-icons/md"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Wrapper className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
      <MdClose />
      </button>
      <div className="side-container">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Kobiety</Accordion.Header>
            <Accordion.Body>
              <ul>
              <li key="all">
                    <Link to={`/women`} >Wszystko</Link>
                  </li>
                {categoriesF.map(item => (
                  <li key={item}>
                    <Link to={`/women/${item}`}>{capitalize(item)}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Mężczyźni</Accordion.Header>
            <Accordion.Body>
              <ul>
              <li key="all">
                    <Link to={`/men`}>Wszystko</Link>
                  </li>
                {categoriesM.map(item => (
                  <li key={item}>
                    <Link to={`/men/${item}`}>{capitalize(item)}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  opacity: 0;
  padding-top: 100px;
  transition: var(--transition);
  transform: translateX(-100%);

  &.show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }


  ul {
margin-bottom: 0;
  }

 li a{
  padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
   display: block;
   padding-left: 2rem;
   border-bottom: 1px solid whitesmoke;
 }

 li:first-child{
   font-weight: bold;
 }

  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }

  .accordion-body {
    padding: 0;
  }

  .accordion,
  .accordion-button:focus {
    width: 100vw;
    border-radius: 0;
    box-shadow: none;
  }

  .accordion-button::after {
    content: "+";
    background-image: none;
    transform: none;
  }

  .accordion-button:not(.collapsed)::after {
    content: "-";
    background-image: none;
    transform: none;
  }

  .accordion-button,
  .accordion-button:focus {
    color: black !important;
    border-color: var(--clr-accent) !important;
  }

  .accordion-button:not(.collapsed) {
    background-color: whitesmoke;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }
`

export default Sidebar
