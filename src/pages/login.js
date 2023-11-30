import "../css/login.css"



function Login(props){
    const signIn = async () => {
        const provider = new props.fireProp.auth.GoogleAuthProvider();
        const auth = props.authProp;
        try {
            await auth.signInWithPopup(provider)
            .then(() => {
                // The user is now signed in with Google.
                //Add users info to the collection
                if(auth.currentUser){
                    const FS = props.fireStoreProp;
                    const userData = {
                        Name: auth.currentUser._delegate.displayName,
                        Picture: auth.currentUser._delegate.photoURL,
                        location: "-1",
                    };
                    FS.collection('users').add(userData)
                        .then((docRef) => {
                            console.log("User Added id:", docRef.id);
                        })
                        .catch((error) => {
                            console.error("couldn't add ", error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error.message);
            });
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };
    return (
        <div className="login">
            <button className="LOGIN-BUTTON" onClick={signIn}>Find People</button>
        </div>
    );
}
export default Login;