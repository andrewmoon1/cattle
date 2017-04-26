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
    this.props.docAreas.forEach((area) => {
      count += 1;
      if (area === 'textArea') {
        areas.push(
          <TextArea key={count} />,
        );
      } else if (area === 'codeMirror') {
        areas.push(
          <CodeMirror
            key={count}
            options={this.cmOptions}
            defaultValue={'write code here'}
          />,
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

Code.propTypes = {
  docAreas: PropTypes.arrayOf(PropTypes.string),
  addCode: PropTypes.func.isRequired,
  addText: PropTypes.func.isRequired,
};

Code.defaultProps = {
  docAreas: ['textArea', 'codeMirror'],
};


export default Code;
