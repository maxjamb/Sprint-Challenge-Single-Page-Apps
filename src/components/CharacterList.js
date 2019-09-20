import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const[char, setChar] = useState([]);

  const rickAndMortyAPI = `https://rickandmortyapi.com/api/character/`

  useEffect(() => { 
    axios.get(rickAndMortyAPI)
    .then(response => {
      setChar(response.data.results);

    })
    .catch(error =>{
      console.log("this is an error", error);
    })

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);

  return (
    <section className="character-list">
      {char.map(character => {
        return (
          <CharacterCard 
          key={character.id}
          name={character.name}
          image={character.image}
          />
        )
      })
      }
    </section>
  );
}
