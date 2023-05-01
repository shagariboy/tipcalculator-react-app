import React from 'react';
import '../css/Header.css';// import your css file
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="logo">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
