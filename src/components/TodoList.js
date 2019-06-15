import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoBy, toggleCompletionOf } from '../reducers/todoReducer';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const todoList = todos.length ? (
    todos.map(todo => (
      <article
        key={todo.id}
        className={`row collection-item ${todo.done ? 'green lighten-3' : ''}`}
        onClick={() => dispatch(toggleCompletionOf(todo.id))}
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
            dispatch(deleteTodoBy(todo.id));
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
