import Login from './components/login.js';
import People from './components/people.js'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useEffect, useState } from "react";
import SignOut from "./components/signOut.js";
import { useAuthState } from 'react-firebase-hooks/auth';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBmVJ1xkOnSoytlpX6jwLrqoT2iI7EWyYg",
  authDomain: "map-2-91351.firebaseapp.com",
  projectId: "map-2-91351",
  storageBucket: "map-2-91351.appspot.com",
  messagingSenderId: "22094422834",
  appId: "1:22094422834:web:a49b0e7e50a8e4dd2ead2b",
  measurementId: "G-V5G5BNS0CZ"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      {user ? (<div> <People fireStore = {firestore}/> <SignOut authProp={auth}/> </div>): 
      <Login fireProp={firebase} authProp={auth} fireStoreProp={firestore}/>
      }
    </div>
  );
}

export default App;
