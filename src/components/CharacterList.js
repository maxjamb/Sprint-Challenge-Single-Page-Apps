import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get("https://rick-api.herokuapp.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
        console.log("characters", characters);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters
        ? characters.map((char, index) => (
            <CharacterCard key={index} char={char} />
          ))
        : null}
    </section>
  );
};

export default CharacterList;
