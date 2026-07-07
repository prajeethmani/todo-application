import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [page, setPage] = useState("todo");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
      } catch (error) {
        console.error("Failed to load todos", error);
      }
    };

    fetchTodos();
  }, []);

  if (page === "login") {
    return <Login setPage={setPage} />;
  }

  if (page === "signup") {
    return <Signup setPage={setPage} />;
  }

  return (
    <div className="container">
      <h1>Todo Application</h1>

      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>Signup</button>
      </div>

      <TodoForm todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;