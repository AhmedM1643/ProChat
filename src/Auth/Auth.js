import React, { useState } from 'react'
import logo from "../imgs/chat.png";
import Signup from "./Signup";
import Login from "./Login";

const Auth = () => {
    const [current, setCurrent] = useState("");

    const openTab1 = (e) => {
        e.target.classList.add("active")
        e.target.nextElementSibling.classList.remove("active")
        setCurrent("Signup")
    }

    const openTab2 = (e) => {
        e.target.classList.add("active")
        e.target.previousElementSibling.classList.remove("active")
        setCurrent("Login")
    }
    
    return (
    <div className='auth'>
        <header>
            <img src={logo} className="logo"/>
            <p className='title'>ProChat</p>
        </header>
        <div className='tabs'>
            <button className='active' onClick={(e) => {openTab1(e)}}>Signup</button>
            <button onClick={(e) => {openTab2(e)}}>Login</button>
        </div>
        <div className='auth-container'>
            {
                current == "Login" ? <Login /> : <Signup />
            }
            
        </div>
    </div>
    )
};

export default Auth