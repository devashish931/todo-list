import axiosInstance from "./axios";

export const addTodo = (todo) => {
  return axiosInstance.post("/todos", todo);
};

export const getAllTodos = () => {
  return axiosInstance.get("/todos");
};

export const updateTodo = (id, todo) => {
  return axiosInstance.put(`/todos/${id}`, todo);
};

export const deleteTodo = (id) => {
  return axiosInstance.delete(`/todos/${id}`);
};
