import { combineReducers } from 'redux';

import inbox from './inbox-reducer';
import selectedNote from './selected-note-reducer';

const rootReducer = combineReducers({
  inbox,
  selectedNote
});

export default rootReducer;
