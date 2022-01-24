import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import styled from "styled-components"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

const AuthPage = () => {
  return (
    <Layout>
      <Seo title="Zaloguj się" />
      <Wrapper className="page-size-vertical padding-top-page">
        <div>
          <h2>Mam już konto</h2>
          <LoginForm />
        </div>
        <div>
          <h2>Załóż konto</h2>
          <RegisterForm />
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
  flex-wrap: wrap;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 500px;
    width: 50%;
    padding: 3rem;
  }

  & > div:last-of-type {
    border-left: 1px solid grey;
  }

  @media screen and (max-width: 768px) {
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: none;
      padding-left: 1rem;
      padding-right: 2rem;
    }

    & > div:last-of-type {
      border:none;
    }

  }

  h2 {
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  form {
    width: 100%;
  }

  button {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:first-of-type {
    margin-top: 2rem;
  }
`

export default AuthPage
