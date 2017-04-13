import React from 'react';
import './Header.scss';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <section className="header">
          <h1 className="headline">Cattle</h1>
          <div className="navigation">
            <a href="#" className="nav-link">Alogrithms</a>
            <a href="#" className="nav-link">Submit Alogrithm</a>
          </div>
        </section>
      );
    }
}

export default Header;
