import axios from "axios";
import type { Todo } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTodos = async (): Promise<Todo[]> => {
  const res = await api.get("/todos");
  return res.data;
};

export const addTodo = async (title: string): Promise<Todo> => {
  const res = await api.post("/todos", { title });
  return res.data;
};

export const updateTodo = async (id: number, data: Partial<Todo>): Promise<Todo> => {
  const res = await api.patch(`/todos/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id: number) => {
  await api.delete(`/todos/${id}`);
};
