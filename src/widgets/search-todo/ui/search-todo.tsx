import { useMemo, useState } from 'react';

import TodoContainer from '../../../features/todo/ui/todo-container.tsx';
import TodoList from '../../../features/todo/ui/todo-list.tsx';
import { useTodoList } from '../../../entities/todo/model/hooks.ts';
import Search from '../../../features/search/ui/search.tsx';

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
