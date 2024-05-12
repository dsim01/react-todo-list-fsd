import { useMemo, useState } from 'react';

import { useTodoList } from '../../../entities/todo';
import { Search } from '../../../features/search';
import { TodoContainer, TodoList } from '../../../features/todo';

export default function SearchTodo() {
  const [searchTerm, setSearchTerm] = useState('');
  const { toggleTodo, searchTodo } = useTodoList();

  const filteredTodos = useMemo(
    () => searchTodo(searchTerm),
    [searchTodo, searchTerm],
  );

  return (
    <TodoContainer
      search={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      todoList={<TodoList todos={filteredTodos} toggleTodo={toggleTodo} />}
    />
  );
}
