import React from 'react';
import { observer } from 'mobx-react';

const TodoItem = observer(({ todo, handleDelete, handleCompletion }) => {
  return (
    <article
      className={`row collection-item ${todo.done ? 'green lighten-3' : ''}`}
      onClick={() => handleCompletion(todo.id)}
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
  );
});

export default TodoItem;
