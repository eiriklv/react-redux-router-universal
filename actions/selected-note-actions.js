import {
  getNoteById,
  getInbox,
  deleteNoteById,
  updateNoteById,
  createNewNote
} from '../services/api';

export const POPULATE_SELECTED_NOTE_PENDING = 'POPULATE_SELECTED_NOTE_PENDING';
export const POPULATE_SELECTED_NOTE_SUCCESS = 'POPULATE_SELECTED_NOTE_SUCCESS';
export const POPULATE_SELECTED_NOTE_ERROR = 'POPULATE_NOTELIST_ERROR';

function populateSelectedNotePending() {
  return {
    type: POPULATE_SELECTED_NOTE_PENDING
  };
}

function populateSelectedNoteSuccess(note) {
  return {
    type: POPULATE_SELECTED_NOTE_SUCCESS,
    note
  };
}

function populateSelectedNoteError(error) {
  return {
    type: POPULATE_SELECTED_NOTE_ERROR,
    error
  };
}

export function populateSelectedNote(id) {
  return (dispatch) => {
    dispatch(populateSelectedNotePending());
    return getNoteById(id)
      .then((note) => dispatch(populateSelectedNoteSuccess(note)))
      .catch((error) => dispatch(populateSelectedNoteError(error)))
  }
}
