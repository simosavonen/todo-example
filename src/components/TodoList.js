import React from 'react';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <li
        key={todo.id}
        className={`collection-item ${todo.done && 'green lighten-3'}`}
        onClick={() => handleToggle(todo.id)}
      >
        <div>
          {todo.task}
          <button
            className="secondary-content button-link"
            onClick={event => {
              event.stopPropagation();
              handleDelete(todo.id);
            }}
            title="remove this todo"
          >
            <i className="material-icons">close</i>
          </button>
        </div>
      </li>
    ))
  ) : (
    <li className="collection-item">Nothing left to do!</li>
  );

  return <ul className="collection">{todoList}</ul>;
};

export default TodoList;
