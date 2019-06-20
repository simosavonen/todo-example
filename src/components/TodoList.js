import React from 'react';
import { inject, observer } from 'mobx-react';
import TodoItem from './TodoItem';

const TodoList = inject('todoStore')(
  observer(({ todoStore }) => {
    const handleDelete = id => {
      todoStore.delete(id);
    };
    const handleCompletion = id => {
      todoStore.toggleCompletion(id);
    };
    const todoList = todoStore.todos.length ? (
      todoStore.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleCompletion={handleCompletion}
        />
      ))
    ) : (
      <article className="collection-item">Nothing left to do!</article>
    );

    return <div className="collection">{todoList}</div>;
  })
);

export default TodoList;
