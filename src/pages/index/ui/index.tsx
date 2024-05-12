import { DefaultTodo, SearchTodo } from '../../../features/todo';

export default function IndexPage() {
  return (
    <div>
      <div>
        <h2>Search todo-list (FSD Example)</h2>
        <SearchTodo />
      </div>
      <div>
        <h2>Default todo-list (FSD Example)</h2>
        <DefaultTodo />
      </div>
    </div>
  );
}
