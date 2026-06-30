function TodoItem(props) {
  return (
    <div className="card shadow-sm border-0 rounded-4 mb-3">
      <div className="card-body">

        <div className="d-flex align-items-start gap-3 mb-3">

        <i
          className={
            props.todo.completed
              ? "bi bi-check-square-fill text-success fs-3"
              : "bi bi-square fs-3"
          }
          style={{ cursor: "pointer" }}
          onClick={() => props.toggleComplete(props.todo)}
        ></i>

          <div
            style={{
              textDecoration: props.todo.completed
                ? "line-through"
                : "none",
              opacity: props.todo.completed ? 0.6 : 1,
            }}
          >
            <h5 className="card-title fw-bold mb-1">
              {props.title}
            </h5>

            <p className="card-text text-muted mb-0">
              {props.desc}
            </p>
          </div>

        </div>

        <div className="d-flex justify-content-end gap-2">

          <button
            className="btn btn-primary"
            onClick={() => props.onEdit(props.todo)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => props.onDelete(props.todo)}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default TodoItem;