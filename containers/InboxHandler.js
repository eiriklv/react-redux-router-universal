import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoteList from '../components/NoteList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

import {
  populateInbox,
  deleteNote,
  createNote
} from '../actions/inbox-actions';

class InboxHandler extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleCreateNote = ::this.handleCreateNote;
    this.handleDeleteNote = ::this.handleDeleteNote;
    this.handleRefreshData = ::this.handleRefreshData;
  }

  componentDidMount() {
    const { notes } = this.props;

    if (!notes.length) {
      this.handleRefreshData();
    }
  }

  handleRefreshData() {
    const { populateInbox } = this.props;
    populateInbox();
  }

  handleCreateNote() {
    const { createNote } = this.props;
    const { history } = this.context;
    const transitionTo = history.pushState.bind(history, null);
    
    createNote(transitionTo);
  }

  handleDeleteNote(id) {
    const { deleteNote } = this.props;
    deleteNote(id);
  }

  render () {
    if (this.props.error) {
      return <ErrorMessage error={this.props.error} />
    }

    if (this.props.isLoading) {
      return <LoadingSpinner />
    }

    return (
      <div>
        <button onClick={this.handleCreateNote}>Create New</button>
        <button onClick={this.handleRefreshData}>Refresh List</button>
        
        <NoteList
          notes={this.props.notes}
          deleteNote={this.handleDeleteNote}
        />
      </div>
    );
  }
}

InboxHandler.contextTypes = {
  history: PropTypes.object.isRequired
};

InboxHandler.propTypes = {
  notes: PropTypes.array.isRequired,
  populateInbox: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state.inbox
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    populateInbox,
    createNote,
    deleteNote
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InboxHandler);
