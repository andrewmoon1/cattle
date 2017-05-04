/* global document */

import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Code from './components/Code';

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      docAreas: [
        'textArea',
        'codeMirror',
      ],
      documentation: {
        'text-0': 'write description here',
        'code-0': 'write code here',
      },
    };


    this.addCode = this.addCode.bind(this);
    this.addText = this.addText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target)
  }

  addCode() {
    this.setState({
      docAreas: this.state.docAreas.concat([
        'codeMirror',
      ]),
    });
  }

  addText() {
    this.setState({
      docAreas: this.state.docAreas.concat([
        'textArea',
      ]),
    });
  }

  increment() {
    this.setState({
      areaCount: this.state.areaCount += 1,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Code
          addCode={this.addCode}
          submit={this.handleSubmit}
          addText={this.addText}
          docAreas={this.state.docAreas}
          areaCount={this.state.areaCount}
          increment={this.increment}
          documentation={this.state.documentation}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
