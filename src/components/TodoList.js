import React, { useContext } from 'react';
import {
  Context as TodoContext,
  deleteOne,
  toggleCompletion
} from '../context/TodoContext';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const todoList = state.todos.length ? (
    state.todos.map(todo => (
      <article
        key={todo.id}
        className={`row collection-item ${todo.done ? 'green lighten-3' : ''}`}
        onClick={() => dispatch(toggleCompletion(todo.id))}
      >
        <div className="col s11 valign-wrapper" style={{ lineHeight: '36px' }}>
          {todo.done && (
            <i
              className="material-icons green-text"
              style={{ paddingRight: '10px', marginLeft: '-10px' }}
            >
              done
            </i>
          )}
          {todo.task}
        </div>
        <button
          className="col btn-flat right"
          onClick={event => {
            event.stopPropagation();
            dispatch(deleteOne(todo.id));
          }}
          title="remove this todo"
        >
          <i className="material-icons">close</i>
        </button>
      </article>
    ))
  ) : (
    <article className="collection-item">Nothing left to do!</article>
  );

  return <div className="collection">{todoList}</div>;
};

export default TodoList;
