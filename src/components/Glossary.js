import React, { useState, useEffect } from 'react';
import lexiconData from '../data/lexicon.json';


function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);
  const [direction, setDirection] = useState('');

  const isArabic = (str) => /[\u0600-\u06FF]/.test(str);

  const handleSearch = () => {
    let entry;
    if (isArabic(searchTerm)) {
      // Arabic to English search
      entry = lexiconData.find(item => item.arabic?.toLowerCase() === searchTerm.toLowerCase());
      setDirection('Arabic to English');
      setResult(entry ? entry.english : 'Translation not found');
    } else {
      // English to Arabic search
      entry = lexiconData.find(item => item.english?.toLowerCase() === searchTerm.toLowerCase());
      setDirection('English to Arabic');
      setResult(entry ? entry.arabic : 'Translation not found');
    }
  };

  return (
    <div>
      <h1>English-Arabic Lexicon</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter word in English or Arabic"
      />
      <button onClick={handleSearch}>Translate</button>
      {result && <p>{direction}: {result}</p>}
    </div>
  );
}

export default Glossary;