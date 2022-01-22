import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"

const HomeCarousel = () => {
  return (
    <Wrapper interval="3000">
      <Carousel.Item>
        <StaticImage
          className="hero-img"
          src="../assets/images/bg-w-2.jpg"
          alt="First slide"
          layout="constrained"
          placeholder="tracedSVG"
          width={1920}
          quality="85"
        />
        <div className="hero-title-panel d-flex-column-c pos-abs-centered">
          <h2>Kobiety</h2>
          <Link className="btn btn-light btn-sharp mt-2" to="/women">
            Zobacz
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="hero-img"
          src="../assets/images/bg-m-1.jpg"
          alt="First slide"
          layout="constrained"
          placeholder="tracedSVG"
          width={1920}
          quality="85"
        />
        <div className="hero-title-panel d-flex-column-c pos-abs-centered">
          <h2>Mężczyźni</h2>
          <Link className="btn btn-light btn-sharp mt-2" to="/men">
            Zobacz
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="hero-img"
          src="../assets/images/bg-w-1.jpg"
          alt="First slide"
          layout="constrained"
          placeholder="tracedSVG"
          width={1920}
          quality="85"
        />
        <div className="hero-title-panel d-flex-column-c pos-abs-centered">
          <h2>Kobiety</h2>
          <Link className="btn btn-light btn-sharp mt-2" to="/women">
            Zobacz
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="hero-img"
          src="../assets/images/bg-m-2.jpg"
          alt="First slide"
          layout="constrained"
          placeholder="tracedSVG"
          width={1920}
          quality="85"
        />
        <div className="hero-title-panel d-flex-column-c pos-abs-centered">
          <h2>Mężczyźni</h2>
          <Link className="btn btn-light btn-sharp mt-2" to="/men">
            Zobacz
          </Link>
        </div>
      </Carousel.Item>
    </Wrapper>
  )
}

const Wrapper = styled(Carousel)`
  .hero-img {
    width: 100vw;
    height: 100vh;
  }

  .hero-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  .hero-title-panel h2 {
    font-size: calc(max(8vw, 52px));
    color: white;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1vw;
  }

  .hero-title-panel a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.3rem;
  }

  .hero-title-panel a :hover {
    background-color: lightgray;
  }

  .carousel-indicators {
    bottom: 4rem;
  }



  .carousel-indicators button {
    border-radius: 100%;
    width: 10px;
    height: 10px;
    margin: 0 5px 0 5px;
  }

  @media screen and (max-width: 1170px) {
    .hero-img {
      height: calc(100vh - var(--height-navbar));
    }
  }

  @media screen and (max-width: 576px) {
    .carousel-control-next,.carousel-control-prev{
    padding-top: 2rem;
  }
  }
`

export default HomeCarousel
