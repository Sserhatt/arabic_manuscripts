import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Glossary from './components/Glossary';
import Search from "./components/Search";


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
    document.getElementById("myBar").style.width = scrolled + "%";
  }


  return (
    <>
   
      <div className="list">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Glossary" element={<Glossary />} />
          <Route path="/eScriptorium" element={<eScriptorium />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </div>



    </>
  );
}

export default App;


