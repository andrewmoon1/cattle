import React, { Component } from 'react';
import './style/App.scss';
import Header from './components/Header/Header.js';
import Code from './components/Code/Code.js';
import $ from 'jquery';
import { foundation } from 'foundation-sites/dist/js/foundation.min';

$.fn.foundation = foundation;

class App extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(document).foundation()
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Code />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
