export type TodoContainerProps = {
  search?: React.ReactNode;
  todoList: React.ReactNode;
};

export default function TodoContainer({
  search,
  todoList,
}: TodoContainerProps) {
  return (
    <div>
      {search}
      {todoList}
    </div>
  );
}
