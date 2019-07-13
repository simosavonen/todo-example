import uuid from 'uuid';
import { action } from 'easy-peasy';

const sampleData = [
  { id: uuid.v4(), todo: 'Learn Python', done: false },
  { id: uuid.v4(), todo: 'Master React', done: true },
  { id: uuid.v4(), todo: 'Look into Easy Peasy', done: true }
];

const todosModel = {
  todos: sampleData,
  addTodo: action((state, todo) => {
    const newTodo = {
      id: uuid.v4(),
      todo,
      done: false
    };
    state.todos.push(newTodo); // push() is OK, Easy Peasy uses 'immer' library
  }),
  deleteTodo: action((state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
  }),
  toggleCompletion: action((state, id) => {
    state.todos = state.todos.map(todo =>
      todo.id !== id ? todo : { ...todo, done: !todo.done }
    );
  })
};

export default todosModel;
