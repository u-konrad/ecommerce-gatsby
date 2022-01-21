import { Link } from "gatsby"
import React, { useState } from "react"
import { BsCartFill, BsSearch } from "react-icons/bs"
import styled from "styled-components"
import { categoriesF, categoriesM } from "../constants/categories"
import Logo from "../assets/svg/logo.svg"
import { capitalize } from "../utils/utils"
import { MdClose } from "react-icons/md"
import { useStaticQuery, graphql } from "gatsby"
import { BiMenu } from "react-icons/bi"
import { useSelector } from "react-redux"

const Navbar = ({toggleSidebar}) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")

  const totalItems = useSelector(state=>state.cart.totalItems)

  const data = useStaticQuery(graphql`
    {
      allContentfulClothing {
        nodes {
          category
          id
          name
        }
      }
    }
  `)

  const filteredItems = !query
    ? []
    : data.allContentfulClothing.nodes.filter(item => {
        if (!item.name || !item.category) return false
        return (
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        )
      })

  return (
    <Wrapper className="nav  py-0">
      <div className="d-flex-row-b nav-size-horizontal mx-auto position-relative">
        <div className="d-flex-row-c">
          <div className="d-flex-row-c">
            <button onClick={toggleSidebar} className="btn-icon d-block d-md-none ps-0">
              <BiMenu style={{fontSize:'24px'}} />
            </button>
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>

          <div className="gender-container">
            <Link to="/women" className="gender-link ">
              Kobieta
            </Link>
            <div className="submenu ">
              <ul className="cat-list ">
                {categoriesF.map(item => (
                  <li key={item}>
                    <Link to={`/women/${item}`}>{capitalize(item)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gender-container">
            <Link to="/men" className="gender-link ">
              Mężczyzna
            </Link>
            <div className="submenu ">
              {" "}
              <ul className="cat-list ">
                {categoriesM.map(item => (
                  <li key={item}>
                    <Link to={`/men/${item}`}>{capitalize(item)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div>
          <button onClick={() => setSearchOpen(true)} className="btn-icon me-3">
            <BsSearch />
          </button>
          <Link to="/cart" className="btn-icon cart-link position-relative">
            <BsCartFill />
            {!!totalItems && <div className="counter">{totalItems}</div>}
          </Link>
        </div>
      </div>
      {searchOpen && (
        <div className="search-overlay">
          <button
            className="close-btn btn-icon"
            onClick={() => {
              setQuery("")
              setSearchOpen(false)
            }}
          >
            <MdClose />
          </button>
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          ></input>
          <div className="search-container">
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
  background-color: whitesmoke;
  height: var(--height-navbar);

  --logo-width: 180px;
  --logo-margin: 50px;

  .counter{
    border-radius: 100%;
    background-color: var(--clr-accent);
    border:1px solid white;
    color:white;
    font-size: 14px;
    position: absolute;
    top: -5px;
    right: -10px;
    z-index: 100;
    width: 22px;
    height: 22px;
    text-align: center;
  }

  .logo {
    width: var(--logo-width);
    margin-right: var(--logo-margin);
    margin-top: 0.5rem
  }

  .close-btn {
    color: white;
    position: fixed;
    top: 5%;
    right: 10%;
    z-index: 101;
    font-size: 36px;
  }

  .search-container {
    position: fixed;
    top: 20%;
    left: 50%;
    width: 50%;
    min-width: 300px;
    font-size: 20px;
    transform: translate(-50%);
    z-index: 103;
    color: white;
  }

  .search-container a {
    color: white;
  }

  .search-container a:hover {
    color: grey;
  }

  .search-input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    position: fixed;
    top: 15%;
    left: 50%;
    width: 50%;
    min-width: 300px;
    font-size: 20px;
    transform: translate(-50%);
    z-index: 102;
    color: white;
  }

  .gender-link {
    height: var(--height-navbar);
    margin-right: 1rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: black;
    box-sizing: content-box;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .gender-container {
      display: none;
    }

    .logo {
      width: 120px;
      margin-left: 0.5rem;
    }
  }

  .gender-container:hover .gender-link {
    height: calc(var(--height-navbar) - 4px);
    border-top: inset 2px transparent;
    border-bottom: inset 2px var(--clr-accent);
    background-color: white;
  }

  .cart-link {
    font-size: 20px;
  }

  .submenu {
    height: 300px;
    width: 100vw;
    display: none;
    padding: 2rem 3rem 0 3rem;
    position: absolute;
    top: var(--height-navbar);
    left: 0;
    background-color: white;
    border-top: 1px solid lightgray;
  }

  .gender-container:hover .submenu {
    display: block;
  }
  .cat-list {
    margin-left: calc(var(--logo-width) + var(--logo-margin));
  }
  .cat-list li {
    padding-bottom: 15px;
  }
  .cat-list a:hover {
    text-decoration: underline;
  }

  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: var(--height-navbar);
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    display: none;
  }

  .gender-container:hover ~ .overlay {
    display: block;
  }

  .search-overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 100;
    display: block;
  }
`

export default Navbar
