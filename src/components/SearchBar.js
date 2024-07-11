import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
