import React from "react";
import styled from "styled-components";

const CharacterCardStyles = styled.div`
  border: 1px solid grey;
  margin: 0 auto;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: silver;
  margin-bottom: 30px;
  border-radius: 1rem;

  img {
    width: 100%;
  }
`;

const CharacterCard = props => {
  console.log(props);
  const { name, image, species, status, gender } = props.char;
  return (
    <CharacterCardStyles>
      <h1>{name}</h1>
      <img src={image} />
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
    </CharacterCardStyles>
  );
};

export default CharacterCard;
