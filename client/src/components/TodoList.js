import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodos(savedTasks);
  }, []);
  return (
    <div className="todo-list-container">
      {todos.map((todo) => {
        return (
          <div className="todo-item-container">
            <FaRegCircle className="item-done-button" color="#9a9a9a" />
            <div className="item-title">{todo.title}</div>
          </div>
        )
      })}
    </div>
  );
};

export default TodoList;