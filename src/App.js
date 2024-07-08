import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import eScriptorium from './components/eScriptorium';
import Glossary from './components/Glossary';
import Search from "./components/Search";



function App() {
  return (
    <div class="list">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Glossary" element={<Glossary />} />
        <Route path="/eScriptorium" element={<eScriptorium />} />
      </Routes>
      </div>
   
  );
}

export default App;
