import "../css/signOut.css"
function Map(props){
    
    function signOut(){
        if(props.authProp.currentUser){
            props.authProp.signOut();
        }
    }
  
    return (
        <div className="signOut-overall">
            <button className="SIGN-OUT-BUTTON" onClick={signOut}>Sign Out</button>
        </div>
    );
}
export default Map;