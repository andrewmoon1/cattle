import React from 'react';
import './Header.scss';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <section className='header row' data-equalizer>
          <h1 className='headline small-12 columns' data-equalizer-watch>Cattle</h1>
          <section className='navigation row'>

          </section>
        </section>
      );
    }
}

export default Header;
