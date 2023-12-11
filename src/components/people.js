import {useState, useEffect} from "react";
import "../css/people.css"

export default function People(props){
    const [data, setData] = useState([]);
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
        </div>
    )

}