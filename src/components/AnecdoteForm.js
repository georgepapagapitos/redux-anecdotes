import React from 'react'
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdote.reducer';
import { clear, error, success } from '../reducers/notification.reducer';
import { createNew } from '../services/anecdotes';

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    try {
      const newAnecdote = await createNew(content);
      dispatch(createAnecdote(newAnecdote));
      dispatch(success(`added a new anecdote!`));
    } catch (e) {
      dispatch(error('error adding a new anecdote'))
    }
    setTimeout(() => {
      dispatch(clear());
    }, 5000);
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm;
