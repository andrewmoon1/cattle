/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import '../style/Code.scss';
import CodeArea from './CodeArea';
import TextArea from './TextArea';
import CodeBttns from './CodeBttns';

class Code extends React.Component {

  render() {
    return (
      <section className="code-input">
        {this.props.docAreas}
        <CodeBttns
          addCode={this.props.addCode}
          addText={this.props.addText}
        />
      </section>
    );
  }
}


export default Code;
