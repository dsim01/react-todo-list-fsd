import { useTodoList } from '../../../entities/todo';
import { TodoContainer, TodoList } from '../../../features/todo';

export default function DefaultTodo() {
  const { todos, toggleTodo } = useTodoList();

  return (
    <TodoContainer
      todoList={<TodoList todos={todos} toggleTodo={toggleTodo} />}
    />
  );
}
