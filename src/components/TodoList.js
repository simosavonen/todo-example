import React from 'react';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <article
        key={todo.id}
        className={`row collection-item ${todo.done ? 'green lighten-3' : ''}`}
        onClick={() => handleToggle(todo.id)}
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
            handleDelete(todo.id);
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
