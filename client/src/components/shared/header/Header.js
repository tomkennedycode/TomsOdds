import React from 'react';
import './Header.css';
import logo from '../../../assets/images/dice.png';

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
        <img src={logo} className="App-logo" alt="logo" />
          Toms Odds
        </a>
      </nav>
    </div>
  );
}

export default Header;
