import React from 'react'
import {Link} from 'react-router-dom'
import './Login.scss'

export default function Login() {




   const submitHandler = (e)=>{
        e.preventDefault();
        alert("submit Handler is working")        
    }


  return (
    <div id="loginPage">
      <div className="container">
        <h1>Login Here</h1>

        <div className="wrapper">
          <form className="main" onSubmit={submitHandler}>
            <div className="logInAs">
              <h3>Login As :</h3>
              <input type="radio" checked required name="loginAs" value="customer" id="customer"/>
              <label htmlFor="customer">
                <div className="active_box"></div>
                Customer
              </label>
              <br/>
              <input type="radio" required name="loginAs" value="resturenOwner" id="resturenOwner"/>
              <label htmlFor="resturenOwner">
                <div className="active_box"></div>
                Resturent Owner
              </label>
       
              
            </div>

            <div className="email">
              <label htmlFor="email">E-mail</label><br/>
              <input type="email" required name="email" id="email"/>
            </div>

            <div className="password">
              <label htmlFor="password">Password</label><br/>
              <input type="password" required name="password" id="password"/>
            </div>

            <div className="submit">
              <button type="submit">Submit</button>
            </div>

            <p>Don't Have a account? <Link to="/registration">Register Now...</Link></p>

          </form>
        </div>
      </div>
    </div>
  )
}
