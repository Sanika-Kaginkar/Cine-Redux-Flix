import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationStyle/_nav.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_li">
          <Link to="/" className="navbar_link">Home</Link>
        </li>
        <li className="navbar_li">
          <Link to="/movies" className="navbar_link">Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
