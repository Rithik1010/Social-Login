import './App.css';
import React, { useState } from 'react';
import { auth, google, facebook, twitter, github } from "./config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

function App() {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    const LoginFalse = () => (
        <div>
            <h1>Login Please...</h1>
            <button className='google' onClick={() => login(google)}>
                Login with Google
            </button>
            <button className='facebook' onClick={() => login(facebook)}>
                Login with Facebook
            </button>
            <button className='twitter' onClick={() => login(twitter)}>
                Login with Twitter
            </button>
            <button className='github' onClick={() => login(github)}>
                Login with GitHub
            </button>
        </div>
    )
    
    const LoginTrue = () => (
        <div>
            <h1>Welcome!</h1>
            <img src={user.photoURL} alt="user-profile-pic" />
            <p>Welcome {user.displayName}, Your account {user.email} has been successfully logged in at {user.metadata.lastSignInTime}</p>
            <button className="logout" onClick={logout}>
                Logout
            </button>
        </div>
    )

    const login = async (provider) => {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        setIsLogin(true);
        console.log(result);
    }

    const logout = async () => {
        const result = await signOut(auth);
        setUser(null);
        setIsLogin(false);
        console.log(result);
    }

    return (
        <div className="App">
            {isLogin && user ? <LoginTrue /> : <LoginFalse />}
        </div>
    );
}

export default App;
