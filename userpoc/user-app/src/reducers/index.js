import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { reqStatusReducer } from './req-status';
import { authreducer } from './auth';

export default combineReducers({
  users: usersReducer,
  reqStatus: reqStatusReducer,
  auth: authreducer
})
