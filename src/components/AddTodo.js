import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const AddTodo = () => {
  const [task, setTask] = useState('');

  const addOne = useStoreActions(actions => actions.todos.addTodo);

  const submit = event => {
    event.preventDefault();
    if (task !== '') {
      addOne(task);
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
};

export default AddTodo;
