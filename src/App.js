// // import {getDatabase,ref, set} from "firebase/database";
// import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {app} from "./Firebase";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import './App.css';
import { async } from "@firebase/util";
// import SignupPage from "./pages/Signup";
// import Signin from "./pages/Singin";
// import { useEffect, useState } from "react";

// // const db  = getDatabase(app);

// const auth =getAuth(app);

const firestore = getFirestore(app);
async function App() {
//   const [user, setUser] = useState(null);

//   // const putData = ()=>{
//   //   set(ref(db, "users/rishabh"),{
//   //     id:1,
//   //     name: "Rishabh",
//   //     age: 21
//   //   });
//   // }

// useEffect(()=>{
//   onAuthStateChanged(auth, (user)=>{
//     if(user){
//       // yes logged in
//       console.log("hello",user);
//       setUser(user);
//     }
//     else{
//       //user is logged out
//       console.log("your are Logged out");
//       setUser(null);
//     }
//   });
// },[])
  
// if(user===null){
//   return (
//     <div className="App">
//     <SignupPage/>
//     <Signin/>
//     {/* <h1>FireBase App</h1>
//     <button onClick={signup}>Create user</button> */}
//     </div>
//   )
// }

const writeD = async()=>{
try {
  const docRef = await addDoc(collection(firestore, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}
   
  return (
    <div className="App">
{/* //   <h1>Hello! {user.email}</h1>
//   <button onClick={()=> signOut(auth)}>Logout</button> */}

<button onClick={writeD}>Put</button>
     </div>

    );
}

export default App;
