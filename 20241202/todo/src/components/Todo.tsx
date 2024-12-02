import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { TodoItem } from "../@types/todo";

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = (value: string) => {
    setTodos((prev) => [...prev, { value }]);
  };

  const handleDeleteTodo = (idx: number) => {
    const filter = todos.filter((_, index) => index !== idx);
    setTodos(filter);
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}
