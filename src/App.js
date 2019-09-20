import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from 'axios';

const rickAndMortyAPI = `https://rickandmortyapi.com/api/character/`

export default function App() {

  const[char, setChar] = useState([]);

  useEffect(() => {
    axios.get(rickAndMortyAPI)
    .then(response => {
      console.log(response.data.results);
      setChar=(response.data.results);
    })
    .catch(error =>{
      console.log("this is an error", error);
    })

  },[])
  

  return (
    <main>
      <Header />
      {/* <CharacterList char={char} /> */}
    </main>
  );
}
