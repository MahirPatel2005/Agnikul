import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src="https://www.agnikul.in/static/media/logo.831177087f1ea750049f.png" alt="Agnikul Logo" />
            </div>
            <div className="nav-links">
                <Link to="/">About</Link>
                <Link to="/engineering">Engineering</Link>
                <Link to="/agnibaan">Agnibaan</Link>
                <Link to="/sorted">SorTeD</Link>
                <Link to="/team">Team</Link>
                <Link to="/news">News</Link>
                <Link to="/careers">Careers</Link>
            </div>
            <div className="nav-buttons">
                <button className="store-button">COSMOS STORE</button>
                <button className="launch-button">BOOK A LAUNCH</button>
            </div>
        </nav>
    );
};

export default Navbar;
