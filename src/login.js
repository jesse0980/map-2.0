import "./css/login.css"
function Login(props){
    return (
        <div className="login">
            <button className="LOGIN-BUTTON" onClick={props.func}>Find People</button>
        </div>
    );
}
export default Login;