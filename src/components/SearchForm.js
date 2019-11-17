import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

const SearchForm = props => {
  // set new search state
  const [searchValue, setSearchValue] = useState("");

  // create function for doing something to the event. eg. update state with what is in
  // the search bar
  const inputSearch = e => {
    setSearchValue(e.target.value);
  };

  // create a lower case array of names, and lower case the search values, and
  //if nothing is there don't do anything
  let filteredChars = props.characters.filter(char => {
    return char.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  // Then map over the new array filteredChar, that has filtered for the input matches,
  // and send them to CharacterCard to be rendered on the screen
  return (
    <section className="search-form">
      <div className="SearchForm">
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={inputSearch}
          />
        </form>
      </div>
      <div>
        {filteredChars.map(char => {
          return <CharacterCard char={char} />;
        })}
      </div>
    </section>
  );
};

export default SearchForm;
