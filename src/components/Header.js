import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div>
        <header className="header-bg">
          <h1 className="title">Argumentation Manuscript Database</h1>
        </header>
      </div>

      <div className="navbar">
        <nav>
          <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/glossary">Glossary</Link></li>
            <li><Link to="/tutorial">Tutorial</Link> </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;