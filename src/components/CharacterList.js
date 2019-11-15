import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const onSearch = event => {
    const searchResults = characters.filter(character => {
      if (character.name.toLowerCase.includes(event.target.value)) {
        return character;
      } else {
        return null;
      }
    });
    console.log(searchResults);
    setSearchResults(searchResults);
  };
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
      <SearchForm onSearch={onSearch} />
      {searchResults.length
        ? searchResults.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        : characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
      }
      {characters
        ? characters.map((char, index) => (
            <CharacterCard key={index} char={char} />
          ))
        : null}
    </section>
  );
};

export default CharacterList;
