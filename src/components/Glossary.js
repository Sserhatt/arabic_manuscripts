import React, { useState } from 'react';
import lexiconData from '../data/lexicon.json';

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);
  const [direction, setDirection] = useState('');

  const isArabic = (str) => /[\u0600-\u06FF]/.test(str);

  const handleSearch = () => {
    let foundEntries = [];

    if (isArabic(searchTerm)) {
      // Arabic to English search
      lexiconData.entries.forEach(entry => {
        entry.entries.forEach(wordEntry => {
          if (wordEntry.word === searchTerm) {
            foundEntries.push({
              word: wordEntry.word,
              transliteration: wordEntry.transliteration,
              part_of_speech: wordEntry.part_of_speech,
              meaning: wordEntry.meaning,
              source: wordEntry.source || wordEntry.sources
            });
          }
        });
      });
      setDirection('Arabic to English');
    } else {
      // English to Arabic search
      lexiconData.entries.forEach(entry => {
        entry.entries.forEach(wordEntry => {
          if (wordEntry.meaning.toLowerCase().includes(searchTerm.toLowerCase())) {
            foundEntries.push({
              word: wordEntry.word,
              transliteration: wordEntry.transliteration,
              part_of_speech: wordEntry.part_of_speech,
              meaning: wordEntry.meaning,
              source: wordEntry.source || wordEntry.sources
            });
          }
        });
      });
      setDirection('English to Arabic');
    }

    setResult(foundEntries.length ? foundEntries : 'Translation not found');
  };

  return (
    <div className="glossary-container">
      <h1>Glossary</h1>
      
      <div className="translation-search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter word or meaning"
        />
        <button onClick={handleSearch}>Translate</button>
        {result && Array.isArray(result) ? (
          result.map((entry, index) => (
            <div key={index} className="result-entry">
              <h2>Result {index + 1}</h2>
              <p><strong>Word:</strong> {entry.word}</p>
              {entry.transliteration && <p><strong>Transliteration:</strong> {entry.transliteration}</p>}
              <p><strong>Part of Speech:</strong> {entry.part_of_speech}</p>
              <p><strong>Meaning:</strong> {entry.meaning}</p>
              <p><strong>Source:</strong> {Array.isArray(entry.source) ? entry.source.join(', ') : entry.source}</p>
            </div>
          ))
        ) : (
          <p>{result}</p>
        )}
      </div>
    </div>
  );
}

export default Glossary;
