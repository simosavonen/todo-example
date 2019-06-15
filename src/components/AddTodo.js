import React, { useState } from 'react';

const AddTodo = ({ handleAddition }) => {
  const [task, setTask] = useState('');

  const submit = event => {
    event.preventDefault();
    if (task !== '') {
      handleAddition(task);
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
