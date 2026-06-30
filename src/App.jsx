import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

   const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");


  // Add Todo
  const addTodo = (title, desc) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      desc: desc,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const onDelete = (todo) => {
    setTodos(
      todos.filter((item) => item.id !== todo.id)
    );
  };

// Edit Todo
const onEdit = (todo) => {
  setEditTodo(todo);
  setEditTitle(todo.title);
  setEditDesc(todo.desc);
  setShowModal(true);
};

const saveEdit = () => {
  setTodos(
    todos.map((item) => {
      if (item.id === editTodo.id) {
        return {
          ...item,
          title: editTitle,
          desc: editDesc,
        };
      }
      return item;
    })
  );

  setShowModal(false);
};

  // Toggle Complete (for future use)
  const toggleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <BrowserRouter>
      <Header />
    {showModal && (
  <div
    className="modal d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Edit Todo</h5>

          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>

        <div className="modal-body">

          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control mb-3"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          ></textarea>

        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button className="btn btn-primary"
            onClick={saveEdit}>
            Save Changes
          </button>
        </div>

      </div>
    </div>
  </div>
)}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addTodo={addTodo}
              todos={todos}
              onDelete={onDelete}
              onEdit={onEdit}
              toggleComplete={toggleComplete}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;