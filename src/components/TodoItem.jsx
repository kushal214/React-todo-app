function TodoItem(props) {
  return (
    <div>
      <h3>{props.title}</h3>

      <p>{props.desc}</p>

      <button
  className="btn btn-danger"
  onClick={() => props.onDelete(props.todo)}
>
  Delete
</button>

      <hr />
    </div>
  );
}

export default TodoItem;