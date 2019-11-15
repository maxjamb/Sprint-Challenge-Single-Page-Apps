import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <header>
        <Link to="/">
          Home
          <Route exact path="/" component={WelcomePage} />
        </Link>
        <br></br>
        <Link to="/characterlist">
          Characters
          <Route path="/characterlist" component={CharacterList} />
        </Link>
        <Link to="searchform">
          Search
          <Route path="/SearchForm" component={SearchForm} />
        </Link>
      </header>
    </main>
  );
}
