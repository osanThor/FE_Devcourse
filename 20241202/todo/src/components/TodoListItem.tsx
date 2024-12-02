import { twMerge } from "tailwind-merge";
import { TodoItem } from "../@types/todo";
import { useState } from "react";

interface Props {
  todo: TodoItem;
  onDelete: () => void;
}
export default function TodoListItem({ todo, onDelete }: Props) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={checked}
          onChange={handleChange}
        />
        <span className={twMerge(checked && "line-through")}>{todo.value}</span>
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
