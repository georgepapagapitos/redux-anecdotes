import { combineReducers } from 'redux';
import anecdotes from './anecdote.reducer';
import notification from './notification.reducer';
import filter from './filter.reducer';

const rootReducer = combineReducers({
  anecdotes,
  notification,
  filter
});

export default rootReducer;