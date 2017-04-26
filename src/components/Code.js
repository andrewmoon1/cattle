/* global document */

import React from 'react';
import '../style/Code.scss';
import CodeBttns from './CodeBttns';
import TextArea from './TextArea';

const CodeMirror = require('react-codemirror');

require('codemirror/lib/codemirror.css');


class Code extends React.Component {
  constructor(props) {
    super(props);
    this.cmOptions = {
      lineNumbers: true,
    };
  }

  render() {
    const areas = [];
    let count = 0;
    this.props.docAreas.forEach((area) => {
      count += 1;
      if (area === 'textArea') {
        areas.push(
          <TextArea key={count} />
        )

      } else if (area === 'codeMirror') {
        areas.push(
          <CodeMirror key={count} options={this.cmOptions} />
        );

      }
    });
    return (
      <section className="code-input">
        {areas}
        <CodeBttns
          addCode={this.props.addCode}
          addText={this.props.addText}
        />
      </section>
    );
  }
}


export default Code;
