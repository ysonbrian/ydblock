/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="header__container">
      <h1>
        <a href="#">ysonbrian blog</a>
      </h1>
      <nav className="nav__container">
        <h2>Articles</h2>
        <h2>About</h2>
      </nav>
    </div>
  );
};

export default Header;
