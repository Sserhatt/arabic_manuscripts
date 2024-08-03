import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Glossary from './components/Glossary';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Tutorial from './components/Tutorial';

function App() {
  const someElementRef = useRef(null);
  const progressBarRef = useRef(null);
 

  useEffect(() => {
    const handleScroll = () => {
      if (progressBarRef.current) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBarRef.current.style.width = `${scrolled}%`;
      }
    };

  

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div ref={someElementRef} id="someElementId">
        {/* Content that may require scrolling */}
      </div>
      <div id="progress-bar" ref={progressBarRef} style={{ height: '5px', backgroundColor: 'blue', position: 'fixed', top: 0, left: 0, width: '0%' }}></div>
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
