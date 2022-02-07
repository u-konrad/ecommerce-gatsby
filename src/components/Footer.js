import React from "react"
import socialLinks from "../constants/social_links"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../assets/svg/logo-gray.svg"

const Footer = () => {
  return (
    <Wrapper className="footer px-4 ps-md-5 pe-lg-5  ">
      <div className="d-flex-column-b h-100">
        <div className=" h-100 page-size-horizontal d-flex flex-column flex-lg-row justify-content-between align-items-start ">
          <div className="col-12 col-lg-8 d-flex flex-column flex-sm-row justify-content-between footer-links">
            <div>
              <h5>Zakupy</h5>
              <ul>
                <li>
                  <Link to="/">Strona główna</Link>{" "}
                </li>
                <li>
                  <Link to="/women">Artykuły damskie</Link>{" "}
                </li>
                <li>
                  <Link to="/men">Artykuły męskie</Link>{" "}
                </li>
                <li>
                  <Link to="/cart">Koszyk</Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h5>Konto</h5>
              <ul>
                <li>
                  <Link to="/auth">Załóż konto</Link>{" "}
                </li>
                <li>
                  <Link to="/auth">Zaloguj się</Link>{" "}
                </li>
                <li>
                  <Link to="/account">Edytuj dane</Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h5>Informacje</h5>
              <ul>
                <li>
                  <Link to="/">Regulamin</Link>{" "}
                </li>
                <li>
                  <Link to="/">Warunki dostawy</Link>{" "}
                </li>
                <li>
                  <Link to="/">Warunki zwrotu</Link>{" "}
                </li>
                <li>
                  <Link to="/">Warunki płatnosci</Link>{" "}
                </li>
                <li>
                  <Link to="/">Reklamacje</Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h5>Nasza marka</h5>
              <ul>
                <li>
                  <Link to="/">O nas</Link>{" "}
                </li>
                <li>
                  <Link to="/">Nasze zobowiązania</Link>{" "}
                </li>
                <li>
                  <Link to="/">Kariera</Link>{" "}
                </li>
                <li>
                  <Link to="/">Pressroom</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4 logo-container ">
            <Logo style={{ width: "200px" }} />
            <p className="mt-3 text-center text-lg-end">
              Clothing S.A.
              <br />
              ul. Marszałkowska 1<br />
              41-400 Warszawa
            </p>
            <p className="mb-1">Znajdź nas:</p>
            <div className="footer-links social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <p className=" text-center mb-0  py-2 text-muted copyright-box">
          &copy;2021 Clothing S.A.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--clr-footer);
  width: 100%;
  height: var(--height-footer);
  color: lightgray;

  @media (max-width: 992px) {
    & {
      height: auto;
    }
  }

  & > div > div {
    padding-top: 80px;
  }

  .footer-links {
    align-items: flex-start;
  }

  h5{
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size:14px
  }


  @media (max-width: 576px) {
    .footer-links {
      align-items: center !important;
      text-align: center;
      font-size:16px
    }
    .footer-links>div{
      margin-bottom:1rem;
    }

    & > div > div {
      padding-top:3rem ;
    }
  }

  .footer-links li {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .footer-links a {
    color: lightgray;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  .footer-links div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  @media (max-width: 992px) {
    .logo-container {
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 5rem;
    }
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 7rem;
  }

  .social-link {
    font-size: 2rem;
    color: black;
    transition: var(--transition);
  }
  .social-link:hover {
    color: whitesmoke;
  }

  .copyright-box {
    border-top: 1px solid #6c757d;
    background-color: #080808;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export default Footer
