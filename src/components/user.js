import "../css/user.css";

export default function User(props){

    return(
        <div className="user_card">
            <img className="user-image" src={props.image}/>
            <h1 className="user-name">{props.name}</h1>
            {/* <h1 className="user-loco">{props.location}</h1> */}
        </div>
    )
}