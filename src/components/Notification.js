import React from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const animationTiming = {
  enter: 500,
  exit: 400,
}

const Notification = ({ text, type, show }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "showing",
        exit: "",
        exitActive: "hiding",
      }}
    >
      <Wrapper className={`${type}`}>
        <span>{text}</span>
      </Wrapper>
    </CSSTransition>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: var(--height-navbar);
  left: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 1rem;
  background-color: white;

  &.success {
    background-color: darkgreen;
  }
  &.error {
    background-color: darkred;
  }
`

export default Notification
