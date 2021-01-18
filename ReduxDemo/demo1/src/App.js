import './App.css';
import TodoList from "./TodoList/index"
import AppRouter from "./AppRouter"
function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <AppRouter/>
    </div>
  );
}

export default App;
