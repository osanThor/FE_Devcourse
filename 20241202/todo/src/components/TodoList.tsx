import { TodoItem } from "../@types/todo";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: TodoItem[];
  onDelete: (idx: number) => void;
}

export default function TodoList({ todos, onDelete }: Props) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, idx) => (
        <TodoListItem key={idx} todo={todo} onDelete={() => onDelete(idx)} />
      ))}
    </ul>
  );
}
