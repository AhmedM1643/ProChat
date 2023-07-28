import React, { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Signup = () => {
    const [ registerEmail, setRegisterEmail ] = useState("");
    const [ registerPassword, setRegisterPassword ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ profilePhoto, setProfilePhoto ] = useState("");

    const register = async() => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            updateProfile(auth.currentUser, {displayName: username, photoURL: profilePhoto});
        } catch(error) {
            alert(error.message);
        };
    };

    return (
    <div className='form signup'>
        <p className='mb-1'>Signup</p>
        <input className="form-input" placeholder="Username.." value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        <input className="form-input" placeholder='Email..' value={registerEmail} onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        <input className="form-input" placeholder='Password..' value={registerPassword} onChange={(e) => {setRegisterPassword(e.target.value)}}/>
        <button className='form-button' onClick={register}>SignUp</button>
    </div>
    );
};

export default Signup;