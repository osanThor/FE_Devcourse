import { TodoItem } from "../@types/todo";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: TodoItem[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
  onDelete: (idx: number) => void;
}

export default function TodoList({ todos, onChange, onDelete }: Props) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onChange={(e) => onChange(e, todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
