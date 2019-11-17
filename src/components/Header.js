import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/characterlist">Characters</Link>
      <br></br>
      <Link to="searchform">Search</Link>
    </header>
  );
}
