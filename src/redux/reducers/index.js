import { combineReducers } from 'redux';
import ui from './uiReducer';
import page from './pageReducer';
import session from './sessionReducer';

// if have a new reducer, add in to the list
export default combineReducers({
  ui,
  page,
  session
})