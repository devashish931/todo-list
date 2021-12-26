import React, { useCallback, useEffect } from "react";
import TodoForm from "../../components/todoForm";
import TodoList from "../../components/todoList";
import { getAllTodos } from "../../services/todoService";

const Home = () => {
  const [todos, setTodos] = React.useState([]);

  const getTodoList = useCallback(async () => {
    try {
      const response = await getAllTodos();
      const { data } = response ?? {};
      if (data?.success) {
        setTodos(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const onSuccess = (todo) => {
    setTodos([...todos, todo]);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t._id === todo._id) {
          return { ...todo, completed: !todo.completed };
        }
        return t;
      })
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <TodoForm onSuccess={onSuccess} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default Home;
