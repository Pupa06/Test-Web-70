import { useState, useEffect, useContext } from "react";
import { LanguageContext } from './LanguageContext.js';
import translationsData from '../translationsData.json';

const Header = ({ setNotDone }) => {
  const [todos, setTodos] = useState([]);
  const [showNotDone, setShowNotDone] = useState(false);
  const { language } = useContext(LanguageContext);
  const translations = translationsData[language].header;

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodos(savedTasks);
  }, []);

  const incompleteTasks = todos.filter((todo) => !todo.completed);

  const handleClickBox = (e) => {
    setShowNotDone(e.target.checked);
    setNotDone(e.target.checked)
  };
  return (
    <div className="header">
      <span>{translations.titleLeft} {incompleteTasks.length} {translations.titleRight}</span>
      <span className="not-complete-check">
        <input
          type="checkbox"
          checked={showNotDone}
          onChange={handleClickBox}
        />
        <span className="not-complete-title">{translations.NotFinishedOnly}</span>
      </span>
    </div>
  );
};

export default Header;
