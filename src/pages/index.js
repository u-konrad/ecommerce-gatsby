import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"
import HomeCarousel from "../components/HomeCarousel"

const IndexPage = () => (
  <Layout>
      <Seo title="Odzieżowy sklep internetowy"/>
    <Wrapper className="page-size-vertical">
      <div className="carousel-wrapper">
     <HomeCarousel/>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.main`

  .carousel-wrapper{
    height: calc(100vh - var(--height-navbar));
    overflow-y: hidden;
  }

  
`

export default IndexPage
