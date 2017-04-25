/* global document */

import React from 'react';
import '../style/Code.scss';
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
