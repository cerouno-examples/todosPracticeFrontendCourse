import storage from 'key-storage';
import defaultTodos from './defaultTodos';

export const populateTodos = () => {
  if (!storage.get('todos')) {
    storage.set('todos', JSON.stringify(defaultTodos))
  }
}

export const getLastTodos = (lasts = 2) => {
  const todos = JSON.parse(storage.get('todos', []));
  return todos.slice(0, lasts);
}

export const getTodos = () => {
  return JSON.parse(storage.get('todos', []));
}

export const getTodo = (id) => {
  const todos = JSON.parse(storage.get('todos', []));
  return todos.find((todo) => {
    return todo.id === id;
  });
}

export const updateTodo = (currentTodo) => {
  const todos = JSON.parse(storage.get('todos', []));
  const newTodos = todos.map((todo) => {
    return todo.id === currentTodo.id ? currentTodo : todo;
  });
  console.log(newTodos);
  storage.set('todos', JSON.stringify(newTodos));
}

export const deleteTodo = (id) => {
  const todos = JSON.parse(storage.get('todos', []));
  const newTodos = todos.filter((todo, i) => {
    return todo.id !== id;
  });
  storage.set('todos', JSON.stringify(newTodos));
}

export const completeTodo = (id) => {
  const todos = JSON.parse(storage.get('todos', []));
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.status = 2;
    }
    return todo;
  });
  storage.set('todos', JSON.stringify(newTodos));
}

