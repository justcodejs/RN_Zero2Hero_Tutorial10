import {actionType} from '../actions/actionType';
import { fromJS } from 'immutable';

function initialState() {
  return fromJS({
    authenticated: false,
    user: null,
    authenticatedOn: null
  });
}

export default function reducer(state=initialState(), action) {
  if(typeof reducer.prototype[action.type] === "function") {
    return reducer.prototype[action.type](state, action);
  }
  else {
    return state;
  }
}

reducer.prototype[actionType.session.sessionSetAuthenticated] = (state, action) => {
  let isAuthenticated = action.payload !== null && action.payload !== undefined;
  return state.set('authenticated', isAuthenticated)
              .set('user', action.payload)
              .set('authenticatedOn', isAuthenticated ? new Date() : null);
              
}