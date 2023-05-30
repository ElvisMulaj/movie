import React, { useState } from 'react'
import "./register.scss"
import { useRef } from 'react'


export default function Register() {

    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")

    const emailRef=useRef();
    const passwordRef=useRef();

    const handleStart= () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish= () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img className="logo"
            src="https://filma365.net/wp-content/uploads/2022/09/ss.png"
            alt=''/>
           <button className="loginButton">Regjistrohu</button>
           </div>
        </div>
        <div className="container">
            <h1>Filma Pa fund, Seriale e shume me shume </h1>
            <h1>Kinema ne gjdo shtepi dhe gjdo kohe</h1>
            <p> Shkruaj Emailin qe te shikosh falas</p>
            {!email ? (
            
            <div className="input">
                <input type="email" placeholder='Shkruaj emailin' ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>
                     Le te fillojm</button>
            </div>
                ) : (
                <form className="input">
                <input type="password" placeholder='passwordi' ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}> Fillojm</button>
            </form>
            )}
        </div>
    </div>
  )
}
