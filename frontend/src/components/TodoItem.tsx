import type { Todo } from "../api/types";

interface Props {
  todo: Todo;
  onToggle: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id, !todo.done)}
          className="mr-2"
        />
        <span className={todo.done ? "line-through" : ""}>{todo.title}</span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
}
