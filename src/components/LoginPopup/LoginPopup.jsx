import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='name' required />}
            <input type="email" placeholder='email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"required />
            <p>agree to terms and privacy policy.</p>
        </div>
        {currState==="Login"?<p>Create new account ?  <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        :<p>Have account ? <span onClick={() => setCurrState("Login")}>Login here</span></p>
    }
      </form>
    </div>
  )
}

export default LoginPopup
