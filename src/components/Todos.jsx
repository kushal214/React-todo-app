import TodoItem from "./TodoItem";

function Todos(props) {

  return (
    <div className="container mt-5">
      <h1>Todos List</h1>

      {props.todos.map((todo) => (
        <TodoItem
  key={todo.id}
  title={todo.title}
  desc={todo.desc}
  todo={todo}
  onDelete={props.onDelete}
/>
      ))}
    </div>
  );
}

export default Todos;