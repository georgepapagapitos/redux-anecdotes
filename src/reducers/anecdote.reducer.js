import { addVote, createNew, getAll } from "../services/anecdotes";

const anecdotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.payload.id;
      const newAnecdote = state.find(a => a.id === id);
      return state.map(a => a.id !== id ? a : newAnecdote)
    }
    case 'NEW_ANECDOTE':
      return [...state, action.payload];
    case 'INIT_ANECDOTES':
      return action.payload
    default:
      return state;
  }
}

export const vote = (anecdoteObject) => {
  anecdoteObject.votes = anecdoteObject.votes + 1;
  return async dispatch => {
    const newAnecdote = await addVote(anecdoteObject);
    dispatch({
      type: 'VOTE',
      payload: newAnecdote
    })
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