import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Anecdote from './Anecdote';
import { vote } from '../reducers/anecdote.reducer';
import { error, success, clear } from '../reducers/notification.reducer';

const AnecdoteList = () => {

  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') {
      return anecdotes;
    }
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()));
  });

  const handleClick = (anecdote) => {
    try {
      dispatch(vote(anecdote.id));
      dispatch(success(`you voted for '${anecdote.content}'`));
    } catch (e) {
      dispatch(error(e.message));
    }
    setTimeout(() => {
      dispatch(clear());
    }, 5000);
  }

  return (
    anecdotes.map(anecdote =>
      <Anecdote
        key={anecdote.id}
        anecdote={anecdote}
        handleClick={() => handleClick(anecdote)}
      />
    )
  )
}

export default AnecdoteList;