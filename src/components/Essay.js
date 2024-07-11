import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  const content = [
    'Welcome to our open-source platform dedicated to the exploration and recognition of Arabic Handwritten Text Recognition (HTR) studies. Our mission is to unveil the rich written heritage of the Ottoman and Kurdish domains, with a focus on the philosophical inquiries of the 17th century. This digital edition project is a groundbreaking endeavor, aimed at promoting early modern intellectual studies and enhancing the accuracy of Arabic manuscript recognition through advanced machine learning methodologies.',
    'Dive into the intellectual landscape of the early modern Ottoman Empire by exploring our digital collection of Arabic manuscripts. These texts, painstakingly transcribed and analyzed, provide invaluable insights into the philosophical and intellectual currents of the period. By making these manuscripts accessible, we aim to preserve and promote the rich cultural and historical discourse of the time.',
    'Our project harnesses the power of machine learning to tackle the unique challenges presented by Arabic scripts. Through the fine-tuning of pre-trained models, we have achieved significant advancements in text recognition accuracy. Our platform showcases the results of rigorous evaluations, including Character Error Rates (CER), Levenshtein Distance metrics, and tokenized word rates, providing a comprehensive analysis of the performance improvements in HTR for Arabic manuscripts.',
    'Embracing a digital humanities approach, our project leverages computational methods to facilitate the analysis and recognition of historical texts. By integrating statistical metrics and machine learning techniques, we provide a robust framework for evaluating and improving the recognition of Arabic handwritten texts. This initiative not only advances the field of HTR but also enriches the broader digital humanities landscape.',
    'We believe in the power of open-source collaboration. Our platform invites scholars, researchers, and enthusiasts to engage with our digital edition, contribute to ongoing research, and share insights. By fostering a community of collaboration, we aim to continuously improve the accuracy and accessibility of Arabic manuscript recognition.',
    'Join us in this exciting journey of discovery and innovation. Explore our digital collection of 17th-century Arabic manuscripts, access the transcriptions, and delve into the analyses. Engage with our community, contribute to the research, and be part of a pioneering effort to preserve and promote the intellectual heritage of the Ottoman and Kurdish domains.'
  ];

  return (
    <>
      <main>
        <SearchBar onSearch={handleSearch} />
        <div className="content">
          <div className="scroll_down">
            <div className="progress-container">
              <div className="progress-bar" id="progress-bar"></div>
            </div>
            <h1>Digital Edition of 17th-Century Arabic Manuscripts</h1>
          </div>
          {content
            .filter(paragraph => paragraph.toLowerCase().includes(searchQuery))
            .map((paragraph, index) => (
              <p key={index}>{highlightText(paragraph, searchQuery)}</p>
            ))}
        </div>

      </main>

      <div className="d-flex">
        <div className="flip-box" onClick={() => window.location.href='search'}>
          <div className="flip-box-inner">
            <div className="flip-box-front search-front">
              <h3>Search</h3>
            </div>
            <div className="flip-box-back search-back">
              <h3>Search</h3>
            </div>
          </div>
        </div>
        <div className="flip-box" onClick={() => window.location.href='glossary'}>
          <div className="flip-box-inner">
            <div className="flip-box-front glossary-front">
              <h3>Glossary</h3>
            </div>
            <div className="flip-box-back glossary-back">
              <h3>Glossary</h3>
            </div>
          </div>
        </div>
        <div className="flip-box" onClick={() => window.location.href='escriptorium'}>
          <div className="flip-box-inner">
            <div className="flip-box-front escriptorium-front">
              <h3>eScriptorium</h3>
            </div>
            <div className="flip-box-back escriptorium-back">
              <h3>eScriptorium</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
