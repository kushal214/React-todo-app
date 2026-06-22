import { useState } from "react";

function AddTodo(props) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {

    e.preventDefault();

    if (!title || !desc) {
      alert("Title or Description cannot be empty");
      return;
    }

    props.addTodo(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="container mt-4">

      <h1>Add a Todo</h1>

      <form onSubmit={submit}>

        <div className="mb-3">
          <label className="form-label">
            Todo Title
          </label>

          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Todo Description
          </label>

          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Add Todo
        </button>

      </form>
    </div>
  );
}

export default AddTodo;