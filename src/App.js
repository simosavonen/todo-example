import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <div className="container">
      <h1 className="center blue-text">Todo's</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
