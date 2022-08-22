import './App.css';
import React, { useState } from 'react';

function App() {

    const [isLogin, setIsLogin] = useState(false);

    const LoginFalse = () => (
        <div>
            <h1>Login Please...</h1>
            <button className='google' onClick={login}>
                Login with Google
            </button>
            <button className='facebook' onClick={login}>
                Login with Facebook
            </button>
            <button className='twitter' onClick={login}>
                Login with Twitter
            </button>
            <button className='github' onClick={login}>
                Login with GitHub
            </button>
        </div>
    )
    
    const LoginTrue = () => (
        <div>
            <h1>Welcome!</h1>
            <p>Welcome USERNAME, Your account EMAIL has been successfully loggd in! at TIMESTAMP</p>
            <button className="logout" onClick={logout}>
                Logout
            </button>
        </div>
    )

    const login = () => {
        setIsLogin(true);
    }

    const logout = () => {
        setIsLogin(false);
    }

    return (
        <div className="App">
            {isLogin ? <LoginTrue /> : <LoginFalse />}
        </div>
    );
}

export default App;
