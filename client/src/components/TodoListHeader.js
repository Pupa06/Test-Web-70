import { useState, useEffect } from "react";

const Header = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodos(savedTasks);
  }, []);
  return <div className="header">You have {todos.length} tasks left!</div>;
};

export default Header;
