import React from "react";
import { addTodo } from "../../services/todoService";

const TodoForm = ({ onSuccess }) => {
  const [todo, setTodo] = React.useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (todo.trim()) {
      try {
        const response = await addTodo({ title: todo });
        const { data } = response ?? {};
        if (data?.success) {
          onSuccess({
            _id: data.id,
            title: todo,
          });
        }
        setTodo("");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please enter a todo");
    }
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <input name="todo" value={todo} onChange={changeHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
