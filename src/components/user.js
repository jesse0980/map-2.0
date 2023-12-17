import "../css/user.css";

export default function User(props){

    return(
        <div className="user_card">
            <img src={props.image}/>
            <h1>{props.name}</h1>
        </div>
    )
}