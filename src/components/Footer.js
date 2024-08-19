import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const d = new Date();
    setCurrentDate(d.toDateString());
  }, []);

  return (
    <footer>
      <div className="topnav">
        <Link to="/">Home</Link>
      </div>
      <p>Date: {currentDate}</p>
      <p className="note">&copy; 2024 Serhat Acar RBDH</p>
    </footer>
  );
}

export default Footer;
