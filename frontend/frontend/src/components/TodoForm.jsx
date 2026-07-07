import axios from "axios";
import { useState } from "react";

function TodoForm({ todos,setTodos}){
    const [title,setTitle] = useState("");

    const addTodo = async ()=>{
        if(title.trim()===""){
            alert("Please enter a todo");
            return;
        }
        try {
            const res = await axios.post("http://localhost:5000/api/todos",{
                title,
            });
            setTodos([...todos,res.data]);
            setTitle("");
        } catch (error) {
            alert("Failed to add todo");
            console.error(error);
        }
    };

    return (
        <div className="todo-form">
            <input type="text" placeholder="enter todo" value={title} onChange={(e)=> setTitle(e.target.value)}  />

            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoForm;