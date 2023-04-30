import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">MowGli</h3>
                <span className="login-desc">Connect with your friends and family around the world!</span>
            </div>
            <div className="login-right">
                <div className="login-box">
                    <input type="email" placeholder='Email' className="login-input" />
                    <input type="password" placeholder='Password' className="login-input" />
                    <button className="login-btn">Log in</button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="login-register-btn">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login