import { createNew, getAll } from "../services/anecdotes";

const anecdotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.payload.id;
      const anecdoteToChange = state.find(a => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    }
    case 'NEW_ANECDOTE':
      return [...state, action.payload];
    case 'INIT_ANECDOTES':
      return action.payload
    default:
      return state;
  }
}

export const vote = (id) => {
  return async dispatch => {
    await dispatch({
      type: 'VOTE',
      payload: { id }
    });
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await createNew(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      payload: anecdotes
    });
  }
}

export default anecdotesReducer;