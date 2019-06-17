import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addOne':
      const newTodo = {
        id: uuid.v4(),
        done: false,
        task: action.data
      };
      return { ...state, todos: state.todos.concat(newTodo) };
    case 'deleteOne':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.data)
      };
    case 'toggleCompletion':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id !== action.data ? todo : { ...todo, done: !todo.done }
        )
      };
    default:
      return state;
  }
};

export const addOne = task => {
  return {
    type: 'addOne',
    data: task
  };
};

export const deleteOne = id => {
  return {
    type: 'deleteOne',
    data: id
  };
};

export const toggleCompletion = id => {
  return {
    type: 'toggleCompletion',
    data: id
  };
};

const initialState = {
  todos: [
    { id: uuid.v4(), task: 'Learn Python', done: false },
    { id: uuid.v4(), task: 'Master React', done: true }
  ]
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const todoContext = {
    state,
    dispatch
  };

  return <Context.Provider value={todoContext}>{children}</Context.Provider>;
};
