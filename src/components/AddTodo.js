import React, { useState } from 'react';
import { inject } from 'mobx-react';

const AddTodo = inject('todoStore')(({ todoStore }) => {
  const [task, setTask] = useState('');

  const submit = event => {
    event.preventDefault();
    if (task !== '') {
      todoStore.add(task);
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={task}
          placeholder="add new todo's here"
          onChange={({ target }) => setTask(target.value)}
        />
        <button className="btn" type="submit">
          add
        </button>
      </form>
    </div>
  );
});

export default AddTodo;
