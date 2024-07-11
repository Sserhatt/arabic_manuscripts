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
              <div className="progress-bar" id="myBar"></div>
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




------------------------------------------------------------------------------------------------------------------


html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center ;
}

header {
  padding: 10px;
  width: 100%;
  text-align: center;
  border-radius: 3px;
  background-image: url(images/FS-6317_07-1024x725.jpg);
  background-position: center;
  color: hsl(127, 8%, 60%);
  margin: 10px;
}

h1{

  text-align: center;
}

p {

  font-family: monospace;
  color: #223508;
}

.header-bg {

  background-size: cover;
  background-position: center;
  height: 150px;

}

.title {
  font-family: "ui-monospace", sans-serif;
  font-size: 3em;
  margin: 0;

}

.navbar nav ul {
  list-style-type: none;
  padding-left: 650px;
  display: flex;
  font-size: 20px;
  background-color: #040a022f;
  border-radius: 5px;
  margin-left: 70px;
  margin-right: 70px;
  
}

.navbar nav ul li {
  position: relative;
  padding: 0 15px;
}

.navbar nav ul li:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: hsl(90, 40%, 16%);
}

.navbar nav ul li a {
  text-decoration: none;
  color: inherit;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vh;

}

.search-bar {
  display: flex;
  align-items: center;
  margin: 1x;
  border-radius: 5px;
  margin-right: 150px;
  
 
}

main {
  flex: 1;
  width: 100%;
  flex-direction: column-reverse;
}

.content {
  padding: 20px;
  background-color: white;
  border: 3px solid #ccc;
  border-radius: 10px;
  margin: 60px;

}

.Small_Title {
  font-family: "ui-monospace", serif;
  font-size: 15px;
  text-align: left;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #9bcddb67;
  border-radius: 5px;
  margin: 70px;
}

.d-flex > .flip-box {
  width: 250px;
  height: 300px;
  margin: 10px;
  text-align: center;
  border: 1px solid green;
  perspective: 1000px;
  border-radius: 1px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url("https://amymhaddad.s3.amazonaws.com/oriental-tiles.png");

}


.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png");


}

.flip-box-front {
  background-color: #dd9038;
  color: #2ceb12;
}

.flip-box-back {
  background-color: #000000;
  color: rgb(3, 10, 3);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center; 
}

 
footer {
  width: 100%;
  background-color: #444;
  color: #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.topnav {
  background-color: #333;
  overflow: hidden;
  padding: 10px 0;
}

.topnav a {
  color: #f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #f2f2f2 ;
  color: black;
}

.topnav a.active {
  background-color: #d3d3d3;
  color: white;
}

.note {
  margin-top: 10px;
}

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 15px;
  background: #20200e;
  width: 0%;
}























------------------------------------------------------



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

  const filteredContent = content.filter(paragraph =>
    paragraph.toLowerCase().includes(searchQuery)
  );















  --------------------------------


  <main>
        <div className="content">
          <div className="scroll_down">
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
            <h1>Digital Edition of 17th-Century Arabic Manuscripts</h1>
          </div>
          {filteredContent.map((paragraph, index) => (
            <p key={index}>{highlightText(paragraph, searchQuery)}</p>
          ))}
        </div>
      </main>



<main>
<SearchBar onSearch={handleSearch} />
  <div className="content">
    <div className="scroll_down">
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <h1>Digital Edition of 17th-Century Arabic Manuscripts</h1>
    </div>
    {[
      'Welcome to our open-source platform dedicated to the exploration and recognition of Arabic Handwritten Text Recognition (HTR) studies. Our mission is to unveil the rich written heritage of the Ottoman and Kurdish domains, with a focus on the philosophical inquiries of the 17th century. This digital edition project is a groundbreaking endeavor, aimed at promoting early modern intellectual studies and enhancing the accuracy of Arabic manuscript recognition through advanced machine learning methodologies.',
      'Dive into the intellectual landscape of the early modern Ottoman Empire by exploring our digital collection of Arabic manuscripts. These texts, painstakingly transcribed and analyzed, provide invaluable insights into the philosophical and intellectual currents of the period. By making these manuscripts accessible, we aim to preserve and promote the rich cultural and historical discourse of the time.',
      'Our project harnesses the power of machine learning to tackle the unique challenges presented by Arabic scripts. Through the fine-tuning of pre-trained models, we have achieved significant advancements in text recognition accuracy. Our platform showcases the results of rigorous evaluations, including Character Error Rates (CER), Levenshtein Distance metrics, and tokenized word rates, providing a comprehensive analysis of the performance improvements in HTR for Arabic manuscripts.',
      'Embracing a digital humanities approach, our project leverages computational methods to facilitate the analysis and recognition of historical texts. By integrating statistical metrics and machine learning techniques, we provide a robust framework for evaluating and improving the recognition of Arabic handwritten texts. This initiative not only advances the field of HTR but also enriches the broader digital humanities landscape.',
      'We believe in the power of open-source collaboration. Our platform invites scholars, researchers, and enthusiasts to engage with our digital edition, contribute to ongoing research, and share insights. By fostering a community of collaboration, we aim to continuously improve the accuracy and accessibility of Arabic manuscript recognition.',
      'Join us in this exciting journey of discovery and innovation. Explore our digital collection of 17th-century Arabic manuscripts, access the transcriptions, and delve into the analyses. Engage with our community, contribute to the research, and be part of a pioneering effort to preserve and promote the intellectual heritage of the Ottoman and Kurdish domains.'
    ].filter(paragraph => paragraph.toLowerCase().includes(searchQuery)).map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
  </main>