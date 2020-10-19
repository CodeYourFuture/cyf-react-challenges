import React, { useState } from 'react';

const Search = ({ searchFn }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function searchTermHandler(event) {
    setSearchTerm(event.target.value);
    searchFn(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="search for country"
        onChange={searchTermHandler}
      />
    </div>
  );
};

export default Search; 