import React from 'react';
import styled from 'styled-components';


const LoadingSpinner = props => {
  return (
    <Wrapper className={`${props.asOverlay && 'loading-spinner__overlay'} d-flex justify-content-center w-100`}>
      <div className="lds-dual-ring"></div>
    </Wrapper>
  );


};

const Wrapper = styled.div`
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}

.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid black;
  border-color: black transparent black transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

.loading-spinner__overlay {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`

export default LoadingSpinner;
