import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

const sampleData = [
  { id: uuid.v4(), task: 'Learn Python', done: false },
  { id: uuid.v4(), task: 'Master React', done: true }
];

const App = () => {
  const [todos, setTodos] = useState(sampleData);

  const deleteOne = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addOne = task => {
    const newTodo = {
      id: uuid.v4(),
      task,
      done: false
    };
    setTodos(todos.concat(newTodo));
  };

  const toggleCompletion = id => {
    setTodos(
      todos.map(todo => (todo.id !== id ? todo : { ...todo, done: !todo.done }))
    );
  };

  return (
    <div className="container">
      <h1 className="center blue-text">Todo's</h1>
      <TodoList
        todos={todos}
        handleDelete={deleteOne}
        handleToggle={toggleCompletion}
      />
      <AddTodo handleAddition={addOne} />
    </div>
  );
};

export default App;
