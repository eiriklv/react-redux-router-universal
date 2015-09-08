import _ from 'lodash';

import {
  POPULATE_INBOX_PENDING,
  POPULATE_INBOX_SUCCESS,
  POPULATE_INBOX_ERROR,
  DELETE_NOTE_PENDING,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_ERROR
} from '../actions/inbox-actions';

const defaultInboxState = {
  error: null,
  isLoading: false,
  notes: []
};

function inbox(state = defaultInboxState, action) {
  switch (action.type) {
    case POPULATE_INBOX_PENDING:
      return _.assign({}, state, {
        isLoading: true
      });
    case POPULATE_INBOX_SUCCESS:
      return _.assign({}, state, {
        isLoading: false,
        error: null,
        notes: action.notes
      });
    case POPULATE_INBOX_ERROR:
      return _.assign({}, state, {
        error: action.error,
      });
    case DELETE_NOTE_PENDING:
      return state;
    case DELETE_NOTE_SUCCESS:
      return _.assign(
        {},
        state,
        { notes: _.filter(state.notes, (note) => note.id !== action.id) }
      );
    case DELETE_NOTE_ERROR:
      return state;

    default:
      return state;
  }
}

export default inbox;
