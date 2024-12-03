import { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { TodoItem } from "../@types/todo";

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const handleAddTodo = (value: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), value, checked: false }]);
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: e.target.checked } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onChange={handleChangeInput}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}
