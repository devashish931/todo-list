import React from "react";
import { deleteTodo, updateTodo } from "../../services/todoService";

const TodoList = ({ todos, onDelete, onToggle }) => {
  const deleteHandler = async (id) => {
    const response = await deleteTodo(id);
    const { data } = response ?? {};
    if (data?.success) {
      onDelete && onDelete(id);
    }
  };

  const toggleHandler = async (todo) => {
    const response = await updateTodo(todo?._id, {
      ...todo,
      completed: !todo.completed,
    });
    const { data } = response ?? {};
    if (data?.success) {
      onToggle && onToggle(todo);
    }
  };

  return (
    <ul className="todo-list">
      {todos?.length > 0 ? (
        todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo?.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <div>
              <button onClick={() => deleteHandler(todo._id)}>Delete</button>
              <button onClick={() => toggleHandler(todo)}>
                {todo.completed ? "Incomplete" : "Complete"}
              </button>
            </div>
          </li>
        ))
      ) : (
        <p>Add some tasks</p>
      )}
    </ul>
  );
};

export default TodoList;
