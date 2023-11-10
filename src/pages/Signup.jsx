import { useState } from "react";
import React from "react";
import {app} from "../Firebase";
import {getAuth} from "firebase/auth";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const SignupPage =()=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

    const createUser =()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value)=> alert("succes"));
    };

    const siginwithGoogle = ()=>{
    signInWithPopup(auth,googleProvider);
    }

   return (
   <div className="signup">
   <h1>SignUp Page</h1>
    <label> Email</label>
    <input 
    onChange={e => setEmail(e.target.value)}
    value={email} type="email" 
    required placeholder="Enter your email"/>
    <label> Password</label>
    <input
    onChange={e => setPassword(e.target.value)}
    value={password}  
    type="password" required placeholder="Enter your password"/>
    <br />
    <button onClick={siginwithGoogle}>Siginwith Google</button>
    <button onClick={createUser}>Signup</button>
   </div>
   
   
   
   );
    };
    export default SignupPage;
