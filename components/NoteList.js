import React, { Component, PropTypes } from 'react';

import NoteListElement from '../components/NoteListElement';

class NoteList extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDeleteNote = ::this.handleDeleteNote;
  }

  handleDeleteNote(id) {
    const { deleteNote } = this.props;
    deleteNote(id);
  }

  render () {
    const { notes } = this.props;
    
    let notelist = notes.map((note) => 
      <NoteListElement
        key={`note-${note.id}`}
        {...note}
        deleteNote={this.handleDeleteNote.bind(null, note.id)}
      />
    );

    return (
      <ul>{notelist}</ul>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteList;
