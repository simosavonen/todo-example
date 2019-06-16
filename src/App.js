import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Provider as TodoProvider } from './context/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoList />
        <AddTodo />
      </div>
    </TodoProvider>
  );
};

export default App;
