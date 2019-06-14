import React, { useState } from 'react';

const AddTodo = ({ handleAddition }) => {
  const [task, setTask] = useState('');

  const submit = event => {
    event.preventDefault();
    if (task !== '') {
      handleAddition(task);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={task}
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
