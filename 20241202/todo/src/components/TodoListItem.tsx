import { twMerge } from "tailwind-merge";
import { TodoItem } from "../@types/todo";

interface Props {
  todo: TodoItem;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}
export default function TodoListItem({ todo, onChange, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.checked}
          onChange={onChange}
        />
        <span className={twMerge(todo.checked && "line-through")}>
          {todo.value}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
