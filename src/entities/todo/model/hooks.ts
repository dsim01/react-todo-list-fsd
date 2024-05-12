import { useState } from 'react';
import { Todo } from '../types.ts';
import { initialTodos } from './model.ts';

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const searchTodo = (search: string) =>
    todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase()),
    );

  return { todos, toggleTodo, searchTodo };
};
