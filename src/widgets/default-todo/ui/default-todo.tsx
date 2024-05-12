import TodoContainer from '../../../features/todo/ui/todo-container.tsx';
import TodoList from '../../../features/todo/ui/todo-list.tsx';
import { useTodoList } from '../../../entities/todo/model/hooks.ts';

export default function DefaultTodo() {
  const { todos, toggleTodo } = useTodoList();

  return (
    <TodoContainer
      todoList={<TodoList todos={todos} toggleTodo={toggleTodo} />}
    />
  );
}
