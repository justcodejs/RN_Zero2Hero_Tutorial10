import { actionType } from './actionType';

export function setAuthenticated(user) {
  return {
    type: actionType.session.sessionSetAuthenticated,
    payload: user
  }
}