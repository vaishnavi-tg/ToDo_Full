import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todos.jsx";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/todos");
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put("http://localhost:3000/api/v1/completed", {
        id: id,
        completed: true,
      });
      loadTodos();
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  return (
    <div>
      <CreateTodo onAdd={loadTodos} />
      <Todos todos={todos} onComplete={handleComplete} />
    </div>
  )
}

export default App;
