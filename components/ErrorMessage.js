import React, { Component, PropTypes } from 'react';

export default class ErrorMessage extends Component {
  render() {
    return (
      <div>Error: {this.props.error}</div>
    );
  }
}
