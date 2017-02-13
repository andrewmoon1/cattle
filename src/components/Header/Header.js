import React from 'react';
import logo from '../../logo.svg';
import './Header.scss';

const Header = props => {
  // const data = {
  //   links: {
  //     home: {
  //       url: 'www.brisket.com'
  //     },
  //     about: {
  //       url: 'www.brisket.com/about'
  //     },
  //     contact: {
  //       url: 'www.brisket.com/contact'
  //     }
  //   }
  // };
  // const iterateNav = (links) => {
  //   links.map((link) => {
  //     return `<a href=${link.url}>${links[link]}</a>`
  //   })
  // };

  return (
    <section className='header row'>
      <button className='nav-bttn show-for-small-only small-1  columns'>|||</button>
      <h2 className='headline small-8 medium-10 columns'>Cattle</h2>
      <img src={logo} className="App-logo small-2 columns" alt="logo" />
      <section className='navigation row'>

      </section>
    </section>
  );
}

export default Header;
