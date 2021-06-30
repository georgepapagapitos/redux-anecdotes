import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Anecdote from './Anecdote';

import { vote } from '../reducers/anecdote.reducer';
import { setNotification } from '../reducers/notification.reducer';

const AnecdoteList = () => {

  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') {
      return anecdotes.sort((a, b) => a.votes > b.votes ? -1 : 1);
    }
    return anecdotes
      .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.votes > b.votes ? -1 : 1);
  });

  const handleClick = (anecdote) => {
    try {
      dispatch(vote(anecdote));
      dispatch(setNotification(`you voted ${anecdote.content}`, 5));
    } catch (e) {
      console.log(e)
    }
  }

  return (
    anecdotes.map(anecdote =>
      <Anecdote
        key={anecdote.id}
        anecdote={anecdote}
        handleClick={handleClick}
      />
    )
  )
}

export default AnecdoteList;