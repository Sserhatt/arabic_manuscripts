import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Tutorial = () => {
  const [results, setResults] = useState([]);

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: '#ddd' }}>{part}</span>
      ) : (
        part
      )
    );
  };


  const handleSearch = (query) => {

    const tutorialItems = [
      'Introduction to React',
      'React Components',
      'State and Props',
      'Lifecycle Methods',
      'Hooks in React',
      'React Router',
      'Redux in React',
      'Context API',
      'React Performance Optimization',
      'Testing React Components',
    ];

    // Filter results based on the search query
    const filteredResults = tutorialItems.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <div id="progress-bar" />
      <SearchBar onSearch={handleSearch} />
      <h2>Tutorial</h2>
      
      <div>
        <h3>Search Results:</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tutorial;
