import React, { Component, PropTypes } from 'react';

export default class Note extends Component {
  render() {
    const { note } = this.props;

    return (
      <div>
        <h1>{note.subject}</h1>
        <p>id: {note.id}</p>
        <p>Content: {note.content}</p>
      </div>
    );
  }
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

Note.defaultProps = {
  note: {
    id: 0,
    subject: 'abc',
    content: 'dsfdghjh'
  }
};
