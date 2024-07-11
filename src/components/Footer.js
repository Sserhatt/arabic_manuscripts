import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer>
                <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                </div>
                <p id="date"></p>
                <p className="note">&copy; 2024 Serhat Acar RBDH</p>
            </footer>
        </div>
    );
}

export default Footer;