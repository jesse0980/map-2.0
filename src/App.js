import Login from './login.js';
import {initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {signInWithPopup, signOut } from "firebase/auth";
import {useEffect, useState } from "react";

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyBmVJ1xkOnSoytlpX6jwLrqoT2iI7EWyYg",
  authDomain: "map-2-91351.firebaseapp.com",
  projectId: "map-2-91351",
  storageBucket: "map-2-91351.appspot.com",
  messagingSenderId: "22094422834",
  appId: "1:22094422834:web:a49b0e7e50a8e4dd2ead2b",
  measurementId: "G-V5G5BNS0CZ"
});

// Initialize Firebase
const auth = firebase.auth();
const firestore = firebase.firestore();

//function to sign in 
function signIn (){
  console.log("tried")
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add an observer to check the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update the user state based on authentication status
    });
    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className="App">
      {user && <Login func={signIn}/>}
    </div>
  );
}

export default App;
