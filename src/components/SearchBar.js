import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };
  
  const clearSearch = () => {
    setQuery('');
    onSearch(''); 
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleInputChange}
      style={{ padding: '3px', fontSize: '1em', border: '3px solid #ccc', borderRadius: '5px', display: "flex",   margin: "0 800px" }}
    />
  );
};

export default SearchBar;


