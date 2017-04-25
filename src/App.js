/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Code from './components/Code';
import CodeArea from './components/CodeArea';
import TextArea from './components/TextArea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docAreas: [
        <TextArea key={0} />,
        <CodeArea key={1} />,
      ],
      areaCount: 2,
    };

    this.addCode = this.addCode.bind(this);
    this.addText = this.addText.bind(this);
  }

  addCode() {
    this.setState({
      docAreas: this.state.docAreas.concat(
      [<CodeArea key={this.state.areaCount} />],
    ),
      areaCount: this.state.areaCount += 1,
    });
  }

  addText() {
    this.setState({
      docAreas: this.state.docAreas.concat(
        [<TextArea key={this.state.areaCount} />],
      ),
      areaCount: this.state.areaCount += 1,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Code
          addCode={this.addCode}
          addText={this.addText}
          docAreas={this.state.docAreas}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
