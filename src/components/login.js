import "../css/login.css"



function Login(props){
    const signIn = async () => {
        //Get current data to check for returning user
        const FS = props.fireStoreProp;
        const people = FS.collection('users');

        // Get all documents from the collection
        const snapshot = await people.get();
        const data = snapshot.docs.map(doc => doc.data()); 


        const provider = new props.fireProp.auth.GoogleAuthProvider();
        const auth = props.authProp;
        try {
            await auth.signInWithPopup(provider)
            .then(() => {
                // The user is now signed in with Google.
                //Add users info to the collection
                if(auth.currentUser){
                    let newUser = true;
                    for(let row in data){
                        if(auth.currentUser._delegate.uid == data[row]['user_id']){
                            console.log("yesss");
                            newUser = false;
                        }
                    }
                    if(newUser){
                        const userData = {
                            Name: auth.currentUser._delegate.displayName,
                            Picture: auth.currentUser._delegate.photoURL,
                            location: "-1",
                            user_id: auth.currentUser._delegate.uid,
                        };
                        FS.collection('users').add(userData)
                            .then((docRef) => {
                                console.log("User Added id:", docRef.id);
                            })
                            .catch((error) => {
                                console.error("couldn't add ", error);
                            });
                        }
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