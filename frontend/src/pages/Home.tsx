import { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todos";
import type { Todo } from "../api/types";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch {
      alert("Không thể tải danh sách todos");
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (title: string) => {
    try {
      const newTodo = await addTodo(title);
      setTodos((prev) => [...prev, newTodo]);
    } catch {
      alert("Lỗi khi thêm todo");
    }
  };

  const handleToggle = async (id: number, done: boolean) => {
    const oldTodos = [...todos];
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done } : t))
    );
    try {
      await updateTodo(id, { done });
    } catch {
      setTodos(oldTodos);
      alert("Không thể cập nhật todo");
    }
  };

  const handleDelete = async (id: number) => {
    const oldTodos = [...todos];
    setTodos((prev) => prev.filter((t) => t.id !== id));
    try {
      await deleteTodo(id);
    } catch {
      setTodos(oldTodos);
      alert("Không thể xóa todo (có thể đã bị xóa ở nơi khác)");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoInput onAdd={handleAdd} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
      ))}
    </div>
  );
}
