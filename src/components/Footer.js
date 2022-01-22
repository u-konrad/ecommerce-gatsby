import React from "react"
import socialLinks from "../constants/social_links"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper className="footer py-2 m-0">
      <div className="nav-padding-left nav-padding-right d-flex justify-content-between align-items-center">
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <p className="my-3 text-muted">&copy;2021 Clothing.co</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--clr-footer);
  width: 100%;
  height: var(--height-footer);

  .footer-links {
    width: 8rem;
    font-size: 14px;
  }
  .footer-links a {
    color: gray;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 6rem;
  }

  .social-link {
    font-size: 1.75rem;
    color: black;
    transition: var(--transition);
  }
  .social-link:hover {
    color: whitesmoke;
  }
`

export default Footer
