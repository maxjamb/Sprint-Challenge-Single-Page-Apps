import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
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
    <main>
      <Header />
      <div className="container">
        <Route exact path="/" component={WelcomePage} />
        <Route
          path="/characterlist"
          render={props => {
            return <CharacterList characters={characters} {...props} />;
          }}
        />
        <Route
          path="/SearchForm"
          render={props => {
            return <SearchForm characters={characters} {...props} />;
          }}
        />
      </div>
    </main>
  );
}

// if passing props beyond match/location/history objects need to use render method
