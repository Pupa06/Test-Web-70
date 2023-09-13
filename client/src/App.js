import './App.css';
import TodoList from './components/TodoList.js';
import TodoListHeader from './components/TodoListHeader.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext.js';

export default function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

const Home = () => {
  const [notDone, setNotDone] = useState(false)
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader setNotDone={setNotDone} />
        <TodoList notDone={notDone} />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
