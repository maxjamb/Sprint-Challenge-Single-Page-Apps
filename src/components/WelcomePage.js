import React from "react";
import styled from 'styled-components';

const WelcomePageStyles = styled.div`
    width: 400px;
    border: 3px solid red;
    display: flex;
    justify-content: space-evenly;
    text-align: center;2
    align-items: flex-end;
    `

export default function WelcomePage() {
  return (
    <WelcomePageStyles>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </WelcomePageStyles>
  );
}
