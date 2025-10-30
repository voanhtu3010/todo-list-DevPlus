import { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Tiêu đề không được rỗng");
    if (title.length > 140) return alert("Tiêu đề quá 140 ký tự");
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhập todo..."
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 rounded">
        Add
      </button>
    </form>
  );
}
