import React from "react";
import styled from "styled-components";


const CharacterCardStyles = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1 rem;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;2
    align-items: flex-end;

    h2 {
        font-size: 1.5rem;
    }

    img {
      width: 100%;
     
    }
`;

export default function CharacterCard (props) {
  const {key, name, species, image, status} = props;
  return(
  
    <CharacterCardStyles>
      <img src={image}/>
      <h2>Name: {name}</h2>
      <h3>Species: {species}</h3>
      <h3>Status: {status}</h3>
    </CharacterCardStyles>
    );
}
