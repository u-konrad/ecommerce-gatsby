import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import styled from "styled-components"
import AdressForm from "../components/AdressForm"

const ProfilePage = () => {
  return (
    <Layout>
      <Seo title="Twoje konto" />
      <Wrapper className="page-size-vertical padding-top-page ">
        <div>
          <h1>Moje konto</h1>
          <AdressForm/>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  & > div {
    width: 50%;
    min-width: 700px;
  }

  h1{
      text-transform: uppercase;
      margin-bottom: 3rem;
      text-align: center;
  }

  @media screen and (max-width:768px) {
    & > div {
    width: 100%;
    padding-left: 1rem;
    padding-right: 2rem;
    min-width: 0;
  }
  }
`

export default ProfilePage
