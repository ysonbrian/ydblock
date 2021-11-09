/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="header__container">
      <Link to="/">
        <h1>ysonbrian</h1>
      </Link>
      <ul className="nav__container">
        <li>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </li>
        <li>
          <Link to="/main">
            <h2>Articles</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
