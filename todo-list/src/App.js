import TodoList from "./components/TodoList";
import AddToDo from "./components/AddToDo";

const App = () => {
  return (
    <div className="todo-list">
        <AddToDo />
        <TodoList/>
    </div>
  );
}

export default App;
