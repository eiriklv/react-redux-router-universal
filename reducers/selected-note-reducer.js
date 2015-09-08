import _ from 'lodash';

import {
  POPULATE_SELECTED_NOTE_PENDING,
  POPULATE_SELECTED_NOTE_SUCCESS,
  POPULATE_SELECTED_NOTE_ERROR
} from '../actions/selected-note-actions';

const defaultSelectedNoteState = {
  error: null,
  isLoading: false,
  note: {}
};

function selectedNote(state = defaultSelectedNoteState, action) {
  switch (action.type) {
    case POPULATE_SELECTED_NOTE_PENDING:
      return _.assign({}, state, {
        isLoading: true
      });
    case POPULATE_SELECTED_NOTE_SUCCESS:
      return _.assign({}, state, {
        isLoading: false,
        error: null,
        note: action.note
      });
    case POPULATE_SELECTED_NOTE_ERROR:
      return _.assign({}, state, {
        error: action.error,
      });

    default:
      return state;
  }
}

export default selectedNote;
