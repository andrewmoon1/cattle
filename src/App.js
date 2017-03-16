import React, { Component } from 'react';
import './style/App.scss';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Code from './components/Code/Code.js';
import $ from 'jquery';
import { foundation } from 'foundation-sites/dist/js/foundation.min';

$.fn.foundation = foundation;

class App extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(document).foundation();
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Code />
        <Footer />
      </div>
    );
  }
}

export default App;
