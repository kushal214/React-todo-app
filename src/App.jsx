import "./App.css";
import { useState } from "react";
import Header from "./Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Read about PC Parts1",
      desc: "I have to read about latest pc parts in the market1",
    },
    {
      id: 2,
      title: "Learn React",
      desc: "Complete Props Topic",
    },
  ]);

  const addTodo = (title, desc) => {

    const newTodo = {
      id: todos.length + 1,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} />
    </>
  );
}

export default App;