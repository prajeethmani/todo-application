import axios from "axios";

function TodoList({todos,setTodos}){
    const deleteTodo = async (id) =>{
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        setTodos(todos.filter((todo)=>todo._id !==id));
    };

    const completeTodo = async (id,completed)=>{
        await axios.put(`http://localhost:5000/api/todos/${id}`,
        {
            completed:!completed,
        });
        setTodos(
            todos.map((todo)=> todo._id === id ? {...todo,completed:!completed}:todo)
        );
    };

    return (
        <div>
            {todos.map((todo)=> (
                <div className="todo-item" key={todo._id}>
                    <span style={{
                        textDecoration:todo.completed ? "line-through":"none",
                    }}> {todo.title}</span>

                    <button onClick={()=> completeTodo(todo._id,todo.completed)}>
                        {todo.completed ? "undo":"Done"}
                    </button>

                    <button onClick={()=> deleteTodo(todo._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;