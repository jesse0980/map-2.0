import {useState, useEffect} from "react";
import "../css/people.css";
import User from "./user";

export default function People(props){
    const [data, setData] = useState([]);
    const [user_array, setArray] = useState([]);
    const FS = props.fireStore;
    const people = FS.collection('users')


    useEffect(() => {
        const fetchData = async () => {
            try {
      
              // Get all documents from the collection
              const snapshot = await people.get();
      
              // Extract data from each document
              const data = snapshot.docs.map(doc => doc.data());
      
              setData(data);

              let newArray = [];

              for(let i = 0; i < data.length; i++){
                let img = data[i].Picture;
                let usersName = data[i].Name;
                let loco = data[i].location;
                newArray = [...newArray, <User image = {img} name = {usersName} location = {loco}/>];
                setArray(newArray);
                console.log(newArray);
              }
            } catch (error) {
              console.error('Error getting data from Firestore: ', error);
            }
          };
    
        fetchData();
    }, []);


    return(
        <div className="people-div">
            {user_array}
            <div className="Location-style"><h1>Your Location: {props.loco}</h1></div>
        </div>
    )

}