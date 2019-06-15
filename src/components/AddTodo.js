import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../reducers/todoReducer';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    if (task !== '') {
      dispatch(createTodo(task));
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
