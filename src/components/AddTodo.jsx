import { useState } from "react";

function AddTodo(props) {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
  setError("Please fill in both Title and Description.");
  return;
}

setError("");

    props.addTodo(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">

              <h2 className="text-center mb-4 fw-bold text-dark">
              Add a Todo
            </h2>

              <form onSubmit={submit}>

                {error && (
                <div className="alert alert-danger">
                   {error}
               </div>
              )}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Todo Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter todo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Todo Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter todo description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success px-5"
                  >
                    Add Todo
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddTodo;