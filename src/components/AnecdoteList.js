import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Anecdote from './Anecdote';
import { vote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {

  const dispatch = useDispatch();
  const anecdotes = useSelector(store => store);

  return (
    anecdotes.map(anecdote =>
      <Anecdote
        key={anecdote.id}
        anecdote={anecdote}
        handleClick={() => dispatch(vote(anecdote.id))}
      />
    )
  )
}

export default AnecdoteList;