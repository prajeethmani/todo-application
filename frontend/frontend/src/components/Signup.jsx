import {useState} from "react";
import axios from "axios";

function Signup({setPage}){
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async ()=>{
        await axios.post("http://localhost:5000/api/auth/signup",{
            name,
            email,
            password
        });

        alert("Signup Successfully");

        setPage("login");
    };

    return (
        <div className="container">
            <h2>Signup</h2>

            <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} />

            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />

            <input type="password" placeholder="password" onChange={(e)=> set.Password(e.target.value)} />


            <button onClick={signup}>Signup</button>

            <p>
                Already have an account ?
                <Button onClick={()=> setPage("login")} >Login </Button>
            </p>
        </div>
    );
}



export default Signup;