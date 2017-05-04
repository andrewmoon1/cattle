import React from 'react';
import PropTypes from 'prop-types';


class CodeBttns extends React.Component {
  render() {
    return (
      <div className="code-buttons">
        <button type="button" className="code-text" onClick={this.props.addText}>
          Insert TextArea
        </button>
        <input type="submit" value="Submit" />
        <button type="button" className="code-area" onClick={this.props.addCode}>
          Insert Code Mirror
        </button>
      </div>
    );
  }
}

CodeBttns.propTypes = {
  addText: PropTypes.func.isRequired,
  addCode: PropTypes.func.isRequired,
};

export default CodeBttns;
