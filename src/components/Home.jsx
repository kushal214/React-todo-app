import AddTodo from "./AddTodo";
import Todos from "./Todos";

function Home(props) {
  return (
    <>
      <AddTodo addTodo={props.addTodo} />

      <Todos
        todos={props.todos}
         onDelete={props.onDelete}
        onEdit={props.onEdit}
         toggleComplete={props.toggleComplete}
      />
    </>
  );
}

export default Home;