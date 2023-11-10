import { useState } from "react";
import React from "react";
import {app} from "../Firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);
const Signin = () => {
    const [email, setEmail] = useState("");
    const [password ,setPassword]= useState("");


    const singin = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((value)=> console.log("signin success"))
        .catch((err)=> console.log(err));
    };

    return ( 
        <div className="signin">
            <h1>Signin Page</h1>
            <label> Enter your email</label>
            <input
             onChange={(e)=> setEmail(e.target.value)}
             value={email}
             type="email"  placeholder="enter your email here"/>
             <label> Enter your password</label>
            <input
            onChange={(e)=> setPassword(e.target.value)}
             value={password}
            type="password"  placeholder="enter your password here"/>
            <button onClick={singin}>SignIn me in</button>
        </div>
     );
}
 
export default Signin;