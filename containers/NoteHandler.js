import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Note from '../components/Note';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import NotFound from '../components/NotFound';

import {
  populateSelectedNote,
} from '../actions/selected-note-actions';

class NoteHandler extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRefreshNote = ::this.handleRefreshNote;
  }

  componentDidMount() {
    const {
      note,
      params
    } = this.props;

    if (note.id !== params.id) {
      this.handleRefreshNote();
    }
  }

  handleRefreshNote() {
    const {
      populateSelectedNote,
      params
    } = this.props;

    populateSelectedNote(params.id);
  }

  render () {
    const {
      error,
      isLoading,
      note
    } = this.props;

    if (error) {
      return <ErrorMessage error={error} />
    }

    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!note.id) {
      return <NotFound />
    }

    return (
      <Note note={note} />
    );
  }
}

NoteHandler.propTypes = {
  populateSelectedNote: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string,
    subject: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
};

function mapStateToProps(state) {
  return state.selectedNote
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    populateSelectedNote,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteHandler);
