import React from 'react'
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdote.reducer';
import { setNotification } from '../reducers/notification.reducer';

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.createAnecdote(content);
    props.setNotification(`you added ${content}`, 5);
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

const ConnectedAnecdoteForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm);

export default ConnectedAnecdoteForm;