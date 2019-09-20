import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const[char, setChar] = useState([]);

  useEffect(() => {
    const rickAndMortyAPI = `https://rickandmortyapi.com/api/character/`
    axios.get(rickAndMortyAPI)
    .then(response => {
      console.log(response.data.results);
      setChar=(response.data.results);
    })
    .catch(error =>{
      console.log("this is an error", error);
    })

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);

  return (
    <section className="character-list">
      <h2>{characters.map((character => {
        return (
          <CharacterCard key={character.id} characters={character} />
        )
      }))}</h2>
    </section>
  );
}
