import { SearchTodo } from '../../../widgets/search-todo';
import { DefaultTodo } from '../../../widgets/default-todo';

export default function Home() {
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
