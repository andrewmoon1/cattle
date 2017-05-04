/* global PropTypes */

import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    return (
      <div className="text-area-container">
        <textarea placeholder={this.props.documentation['text-0']} />
      </div>
    );
  }
}

TextArea.propTypes = {
  documentation: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TextArea;
