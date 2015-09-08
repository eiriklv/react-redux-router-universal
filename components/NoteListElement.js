import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NoteListElement extends Component {
  render () {
    const {
      id,
      subject,
      deleteNote
    } = this.props;

    return (
      <li>
        <Link to={`/note/${id}`} >
          <span>id: {id} | </span>
          <span>subject: {subject} | </span>
        </Link>
          <span><button onClick={deleteNote}>Delete</button></span>
      </li>
    );
  }
}

NoteListElement.propTypes = {
  id: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteListElement;
