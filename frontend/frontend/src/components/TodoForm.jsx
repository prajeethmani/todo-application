import {useState} from "react";
import axios from "axios";

function TodoForm({ todos,setTodos}){
    const [title,setTitle] = useState("");

    const addTodo = async ()=>{
        if(title.trim()===""){
            alert("Please enter a todo");
            return;
        }
        const res = await axios.post("https://localhost:5000/api/todos",{
            title,
        });
        setTodos([...todos,res.data]);
        setTitle("");
    };

    return (
        <div className="todo-form">
            <input type="text" placeholder="enter todo" value={title} onChange={(e)=> setTitle(e.target.value)}  />

            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoForm;