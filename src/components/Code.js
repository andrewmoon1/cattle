/* global document */

import cm from 'codemirror';
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import '../style/Code.scss';

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
        <div className="text-area-container">
          <textarea placeholder="write description here" />
        </div>
        <textarea
          className="code-mirror"
          ref="editor"
          autoComplete="off"
          defaultValue="write code here"
        />
        <div className="code-buttons">
          <button className="code-text">Insert TextArea</button>
          <button className="code-area">Insert CodeArea</button>
        </div>
      </section>
    );
  }
}

export default Code;
