import { Link } from "gatsby"
import React from "react"
import { BsCart } from "react-icons/bs"
import styled from "styled-components"
import { categoriesF, categoriesM } from "../constants/categories"
import Logo from "../assets/svg/logo.svg"

const Navbar = () => {
  return (
    <Wrapper className="nav py-0">
      <div className="d-flex flex-row align-items-center justify-content-between page-size ">
        <div className="d-flex flex-row align-items-center">
          <div className="logo">Fashion</div>

          <div className="gender-container">
            <Link to="/women" className="gender-link ">
              Kobieta
            </Link>
            <div className="submenu px-5">
              <div className="cat-list">
                {categoriesF.map(item => (
                  <Link key={item} to={`/women/${item}`}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="gender-container">
            <Link to="/men" className="gender-link ">
              Mężczyzna
            </Link>
            <div className="submenu px-5">
              {" "}
              <div className="cat-list">
                {categoriesM.map(item => (
                  <Link key={item} to={`/men/${item}`}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="overlay"></div>     

        </div>
        <Link to="/cart" className="cart-link">
          <BsCart />
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
  background-color: white;

  --logo-width: 100px;
  --logo-margin: 50px;

  .logo {
    font-size: 24px;
    font-weight: bold;
    width: var(--logo-width);
    margin-right: var(--logo-margin);
  }

  .gender-link {
    height: var(--height-navbar);
    margin-right: 1rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: black;
    box-sizing: content-box;
  }

  .gender-container:hover .gender-link{
    height: 68px;
    border-top: inset 2px transparent;
    border-bottom: inset 2px var(--clr-accent);
    font-weight: bold;
  }

  .cart-link {
    font-size: 20px;
  }

  .submenu {
    height: 300px;
    width: 100vw;
    display: none;
    position: absolute;
    top: var(--height-navbar);
    left: 0;
    background-color: white;
    border-top: 1px solid lightgray;
  }

  .gender-container:hover .submenu {
    display: flex;
    align-items: center;
  }
  .cat-list {
    margin-left: calc(var(--logo-width) + var(--logo-margin));
    display: flex;
    flex-direction: column;
  }
  .cat-list a {
    padding-bottom: 15px;
    text-transform: capitalize;
  }
  .cat-list a:hover {
    text-decoration: underline;
  }

  .overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top:var(--height-navbar);
    left:0;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
    display: none;
  }

  .gender-container:hover ~ .overlay{
    display: block;
  }
`

export default Navbar
