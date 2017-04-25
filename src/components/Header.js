import React from 'react';
import '../style/Header.scss';

const Header = () =>
  <section className="header">
    <h1 className="headline">Cattle</h1>
    <div className="navigation">
      <a href="#/algorithms" className="nav-link">Alogrithms</a>
      <a href="#/submit-algorithm" className="nav-link">Submit Alogrithm</a>
    </div>
  </section>;

export default Header;
