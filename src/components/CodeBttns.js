import React from 'react';

class CodeBttns extends React.Component {
  render() {
    return (
      <div className="code-buttons">
        <button className="code-text" onClick={this.props.addText}>Insert TextArea</button>
        <button className="code-area" onClick={this.props.addCode}>Insert CodeArea</button>
      </div>
    );
  }
}

export default CodeBttns;
