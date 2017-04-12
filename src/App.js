import React, { Component } from 'react';
import './style/App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Code from './components/Code/Code';

class App extends Component {

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
