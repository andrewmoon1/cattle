/* global document */

import cm from 'codemirror';
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './Code.scss';

require('codemirror/mode/markdown/markdown');

class Code extends React.Component {
  componentDidMount() {
    const textArea = document.querySelector('.code-mirror');
    this.codeMirror = cm.fromTextArea(textArea, {
      lineNumbers: true,
    });
  }
  render() {
    return (
      <section className="code-input">
        <textarea
          className="code-mirror"
          ref="editor"
          autoComplete="off"
          defaultValue="write code here"
        />
      </section>
    );
  }
}

export default Code;
