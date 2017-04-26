/* global  cm */
import cm from 'codemirror';
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

require('codemirror/mode/markdown/markdown');


class CodeArea extends React.Component {

  componentDidMount() {
    cm.fromTextArea(this.codeMirror, {
      lineNumbers: true,
    });
  }
  render() {
    return (
      <textarea
        className="code-mirror"
        ref={codeMirror => (this.codeMirror = codeMirror)}
        autoComplete="off"
        defaultValue="write code here"
      />
    );
  }
}

export default CodeArea;
