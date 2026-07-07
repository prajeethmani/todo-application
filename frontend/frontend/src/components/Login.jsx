import {useState} from "react";
import axios from "axios";

function Login({setPage}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = async ()=>{
        const res = await axios.post("http://localhost:5000/api/auth/login"),{
            email,password
        }
    };
    alert(res.data.message);

    if(res.data.message === "Login Successful"){
        setPage("todo");
    }
};

return (
    <div className="container">
        <h2>Login</h2>

        <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />

        <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}  />

        <button onClick={login}>Login</button>

        <p>
            Don't have an account ?
            <button onClick={()=> setPage("signup")}>Signup</button>
        </p>
    </div>
);

export default Login;