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

              for(let i = 0; i < data.length; i++){
                let img = data[i].Picture;
                let usersName = data[i].Name;
                const newArray = [...user_array, <User image = {img} name = {usersName}/>];
                setArray(newArray);
              }
              console.log(user_array);
            } catch (error) {
              console.error('Error getting data from Firestore: ', error);
            }
          };
    
        fetchData();
    }, []);


    return(
        <div className="people-div">
            <div className="data">
                {
                    data.map((item, index) => (
                        <li key={index}>{JSON.stringify(item)}</li>
                    ))
                }
            </div>
            <div className="Location-style"><h1>Your Location: {props.loco}</h1></div>
        </div>
    )

}