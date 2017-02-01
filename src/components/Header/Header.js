import React from 'react';
import logo from '../../logo.svg';

const Header = props => {
  return (
    <section className='header'>
      <button className='nav-btn'/>
      <h2 className='headline'>Headline</h2>
      <img src={logo} className="App-logo" alt="logo" />
    </section>
  )
}

export default Header;
