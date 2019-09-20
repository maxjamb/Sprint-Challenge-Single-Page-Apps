import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import SearchForm from "./SearchForm";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const[char, setChar] = useState([]);
  const[searchTerm, setSearch] = useState([]);
  
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
          <SearchForm searchTerm={searchTerm} setSearch={setSearch}/>
          // <CharacterCard //key={character.id} data={character}
          // // key={character.id}
          // name={character.name}
          // species={character.species}
          // status={character.status}
          // image={character.image}
          // />
        )
      })
      }
    </section>
  );
}
