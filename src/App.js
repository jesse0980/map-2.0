import Login from './components/login.js';
import People from './components/people.js'
import firebase from 'firebase/compat/app';
import './css/App.css'
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

  //Ask for the users location
  const [location, setLocation] = useState("Allow your location through your browser");
  useEffect(() => {
    if (navigator.geolocation){
        navigator.permissions.query(
            {name: "geolocation"}
        )
        .then(function(result){
            console.log(result);
            if (result.state == "granted" || result.state == "prompt"){
                navigator.geolocation.getCurrentPosition(
                    function succ(pos){
                        let stringLocation = pos.coords.latitude + " " + pos.coords.longitude;
                        setLocation(stringLocation);
                    }
                )
            }
        });
    }
})

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      {user ? (<div> <People loco = {location} fireStore = {firestore}/> <SignOut authProp={auth}/> </div>): 
      <Login fireProp={firebase} authProp={auth} fireStoreProp={firestore}/>
      }
      <h1 className="footer-text">© Jesse Landis</h1>
    </div>
  );
}

export default App;
