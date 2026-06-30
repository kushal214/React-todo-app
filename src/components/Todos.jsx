import TodoItem from "./TodoItem";

function Todos(props) {
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4 fw-bold text-dark">
      My Todo List
    </h2>

      {props.todos.length === 0 ? (
        <p className="text-muted">
          No todos to display. Add a new todo!
        </p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            title={todo.title}
            desc={todo.desc}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
            toggleComplete={props.toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default Todos;