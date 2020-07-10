import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.png';
import './header.scss';
const Header = ({ itemTotal }) => {
  return (
    <header className="header d-flex">
      <img className="header__img" src={logo} alt="logo"></img>
      <div className="header-action">
        <i className="fa fa-shopping-cart"></i>
        <button>
          X
      </button>
      </div>
    </header>
  )
};

export default Header;
