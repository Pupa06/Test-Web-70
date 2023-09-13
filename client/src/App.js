import TodoList from './components/TodoList.js';
import './App.css';
import TodoListHeader from './components/TodoListHeader.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
