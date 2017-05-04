/* global document PropTypes */

import React from 'react';
import PropTypes from 'prop-types';
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
    this.props.docAreas.map((area) => {
      count += 1;
      if (area === 'textArea') {
        areas.push(
          <TextArea
            key={count}
            documentation={this.props.documentation}
          />,
        );
      } else if (area === 'codeMirror') {
        areas.push(
          <CodeMirror
            key={count}
            options={this.cmOptions}
            defaultValue={this.props.documentation['code-0']}
          />,
        );
      }
    });
    return (
      <form className="code-input" onSubmit={this.props.submit}>
        {areas}
        <CodeBttns
          addCode={this.props.addCode}
          submit={this.props.submit}
          addText={this.props.addText}
        />
      </form>
    );
  }
}

Code.propTypes = {
  docAreas: PropTypes.arrayOf(PropTypes.string),
  documentation: PropTypes.objectOf(PropTypes.string).isRequired,
  addCode: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  addText: PropTypes.func.isRequired,
};

Code.defaultProps = {
  docAreas: ['textArea', 'codeMirror'],
};


export default Code;
