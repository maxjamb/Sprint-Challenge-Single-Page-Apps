import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  console.log(props);
  return (
    <section className="character-list">
      {props.characters
        ? props.characters.map((char, index) => (
            <CharacterCard key={index} char={char} />
          ))
        : null}
    </section>
  );
};

export default CharacterList;
