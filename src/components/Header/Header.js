import React from 'react';
import logo from '../../logo.svg';
import './Header.scss';

const Header = props => {
  return (
    <section className='header row'>
      <button className='nav-bttn show-for-small-only small-1  columns'>|||</button>
      <h2 className='headline small-8 columns'>Cattle</h2>
      <img src={logo} className="App-logo small-3 columns" alt="logo" />
    </section>
  )
}

export default Header;
