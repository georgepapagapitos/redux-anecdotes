import React from 'react'
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdote.reducer';
import { setNotification } from '../reducers/notification.reducer';

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    try {
      dispatch(createAnecdote(content));
      dispatch(setNotification(`anecdote added!`, 5))
    } catch (e) {
      console.log(e);
    }
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
