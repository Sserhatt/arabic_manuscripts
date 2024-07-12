import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Glossary from './components/Glossary';
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer"
import NotFound from "./components/NotFound";
import Tutorial from './components/Tutorial';

function App() {
  React.useEffect(() => {
    const d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
  }, []);

  window.onscroll = function() {myFunction()};
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  }



  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>



  );
}

export default App;
