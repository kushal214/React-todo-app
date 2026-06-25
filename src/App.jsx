import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  const [todos, setTodos] = useState(() => {

  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    return JSON.parse(savedTodos);
  }

  return [];
});

  useEffect(() => {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
}, [todos]);

  const addTodo = (title, desc) => {

    const newTodo = {
      id: todos.length + 1,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);
  };

  const onDelete = (todo) => {
  setTodos(
    todos.filter((e) => {
      return e !== todo;
    })
  );
};

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
<Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;