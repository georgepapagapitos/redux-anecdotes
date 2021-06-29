import { combineReducers } from 'redux';
import anecdotes from './anecdote.reducer';
import notification from './notification.reducer';

const rootReducer = combineReducers({
  anecdotes,
  notification
});

export default rootReducer;