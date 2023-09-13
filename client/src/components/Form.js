import { useContext, useState } from "react";
import { LanguageContext } from './LanguageContext.js';
import translationsData from '../translationsData.json';

const Form = () => {
  const [todos, setTodos] = useState([]);

  const [newInput, setNewInput] = useState("");

  const [dueDate, setDueDate] = useState("")

  const { language } = useContext(LanguageContext);
  const translations = translationsData[language].form;

  const handleChange = (e) => {
    setNewInput(e.target.value);
  };

  const handleSubmit = () => {
    if (newInput.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        title: newInput,
        dueDate: dueDate,
        completed: false,
      };

      const updatedTodos = [...todos, newTask];
      saveTodosToLocalStorage(updatedTodos);
      setNewInput("");
    }
  };

  const saveTodosToLocalStorage = (updatedTodos) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []
    const newTasks = [...savedTasks, ...updatedTodos]
    setTodos(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newInput}
        onChange={handleChange}
        placeholder="Enter task ..."
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button>{translations.button}</button>
    </form>
  );
};

export default Form;