import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";

const Login = () => {
    const [ loginEmail, setLoginEmail ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");

    const login = async() => {
        try {
            signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch(error) {
            alert(error.message);
        };
    };

    return (
        <div className='form login'>
        <p className='mb-1'>Login</p>
        <input placeholder='Email..' value={loginEmail} onChange={(e) => {setLoginEmail(e.target.value)}} className="form-input"/>
        <input placeholder='Password..' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="form-input"/>
        <button className="login-button form-button" onClick={login}>Login</button>
    </div>
    );
};

export default Login;