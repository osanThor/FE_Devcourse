import { useState } from "react";

interface Props {
  onAdd: (v: string) => void;
}

export default function TodoEditor({ onAdd }: Props) {
  const [value, setValue] = useState<string>("");

  const handleAdd = () => {
    if (!value) return alert("할 일을 입력해주세요.");
    onAdd(value);
    setValue("");
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter" || e.code === "Enter") handleAdd();
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </div>
  );
}
