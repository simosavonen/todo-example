import uuid from 'uuid';

const initialState = [
  { id: uuid.v4(), task: 'Learn Python', done: false },
  { id: uuid.v4(), task: 'Master React', done: true }
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_TODO':
      return [...state, action.data];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.data.id);
    case 'TOGGLE_COMPLETION':
      const id = action.data.id;
      const todoToChange = state.find(todo => todo.id === id);
      const changedTodo = { ...todoToChange, done: !todoToChange.done };
      return state.map(todo => (todo.id !== id ? todo : changedTodo));
    default:
      return state;
  }
};

export const createTodo = task => {
  return {
    type: 'NEW_TODO',
    data: {
      task,
      done: false,
      id: uuid.v4()
    }
  };
};

export const deleteTodoBy = id => {
  return {
    type: 'DELETE_TODO',
    data: { id }
  };
};

export const toggleCompletionOf = id => {
  return {
    type: 'TOGGLE_COMPLETION',
    data: { id }
  };
};

export default todoReducer;
