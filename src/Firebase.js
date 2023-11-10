import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCzkzdKbKFiWB_ppA3kjOhcZY1nN1w6xaw",
    authDomain: "recfir-3cfa9.firebaseapp.com",
    projectId: "recfir-3cfa9",
    storageBucket: "recfir-3cfa9.appspot.com",
    messagingSenderId: "405448907874",
    appId: "1:405448907874:web:6c74d75cc918695cda053b",
    databaseURL: "https://recfir-3cfa9-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);