import React, { useState, useContext } from 'react';
import { Context as TodoContext, addOne } from '../context/TodoContext';

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState('');

  const submit = event => {
    event.preventDefault();
    if (task !== '') {
      dispatch(addOne(task));
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
