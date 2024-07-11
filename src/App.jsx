import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Glossary from './components/Glossary';
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer"



function App() {
  React.useEffect(() => {
    const d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
  }, []);




  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/escriptorium" element={<eScriptorium />} />
            <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>



  );
}

export default App;


