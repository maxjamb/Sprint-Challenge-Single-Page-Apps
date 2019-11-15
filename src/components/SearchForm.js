import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

const SearchForm = props => {
  const [search, setSearch] = useState([]);
  return (
    <section className="search-form">
      <form
        onSubmit={e => {
          e.preventDeafault();
          onSearch(name);
        }}
      >
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
      </form>
      <Button type="submit">Search</Button>
    </section>
  );
};

export default SearchForm;
