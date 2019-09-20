import React from "react";
import styled from "styled-components";


const CharacterCardStyles = styled.section`
    width: 400px;
    margin-right: 1rem;
    border: 3px solid red;
    display: flex;
    justify-content: space-evenly;
    Background-color: grey;
    text-align: center;2
    align-items: flex-end;
    

    h2 {
        font-size: 2rem;
    }
`;

export default function CharacterCard (props) {
  const {key, name, image} = props;
  return(
    <CharacterCardStyles>
      <h2>Name: {name}</h2>
    </CharacterCardStyles>
    );
}
