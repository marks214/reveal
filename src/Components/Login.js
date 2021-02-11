// modified from: https://github.com/yasoob/Flask-React-JWT/blob/master/src/App.js
import React, { useEffect, useState } from "react";
import {createAuthProvider} from 'react-token-auth';
import {login, authFetch, useAuth, logout} from "../auth"
import { UserProfile } from './UserProfile'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const [logged] = useAuth();
  
    const onSubmitClick = (e)=>{
      e.preventDefault()
      console.log("You pressed login")
      let opts = {
        'username': username,
        'password': password
      }
      console.log(opts)
      fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(r => r.json())
        .then(token => {
          if (token.access_token){
            login(token)
            console.log(token)          
          }
          else {
            console.log("Please type in correct username/password")
          }
        })
    }
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value)
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
  
    return (
      <div>
        {!logged? <form action="#">
          <div>
            <h1>Welcome to Range Reveal!</h1>
          <h2>Login</h2>
            <input type="text" 
              placeholder="Username" 
              onChange={handleUsernameChange}
              value={username} 
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <button onClick={onSubmitClick} type="submit">
            Login Now
          </button>
        </form>
        :
        <div>
        <UserProfile/>
        <button onClick={() => logout()}>Logout</button>
        </div>}
      </div>
    )
  }