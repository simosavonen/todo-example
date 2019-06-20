import { observable, action, decorate } from 'mobx';
import { create, persist } from 'mobx-persist';
import uuid from 'uuid';

export class TodoStore {
  todos = [];

  add(task) {
    this.todos.push({ id: uuid.v4(), task, done: false });
  }

  delete(id) {
    const filtered = this.todos.filter(todo => todo.id !== id);
    this.todos.replace(filtered);
  }

  toggleCompletion(id) {
    const mapped = this.todos.map(todo =>
      todo.id !== id ? todo : { ...todo, done: !todo.done }
    );
    this.todos.replace(mapped);
  }
}

decorate(TodoStore, {
  todos: [persist('list'), observable],
  add: action,
  delete: action
});

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

const initialState = window.localStorage.todos || {
  todos: [
    { id: uuid.v4(), task: 'Learn Python', done: false },
    { id: uuid.v4(), task: 'Master React', done: true }
  ]
};

export const todoStore = new TodoStore();
hydrate('todos', todoStore, initialState);
