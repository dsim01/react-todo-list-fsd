import { Todo } from '../../../entities/todo/types.ts';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
};

export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          key={todo.id}
        >
          <span>{todo.text}</span>
          <input
            onChange={() => toggleTodo(todo.id)}
            defaultChecked={todo.completed}
            type='checkbox'
          />
        </li>
      ))}
    </ul>
  );
}
