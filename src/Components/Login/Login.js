import React, { useState } from 'react'
import './Login.css'

function Login() {
  // eslint-disable-next-line no-unused-vars
  const[user, setUser]=useState("")
  // eslint-disable-next-line no-unused-vars
  const[pass, setPass]=useState("")
  return (
    <div className='outer'>
      <div className='login'>
      <h1>Sign In</h1><br/>
        <label>Username </label><br/>
        <input onChange={(e)=>setUser(e.target.value)} type="text" name="user"/><br/><br/>
        <label>Password </label><br/>
        <input onChange={(e)=>setPass(e.target.value)} type="password" name="pass"/><br/><br/><br/>
        <button className='signin'>Sign in</button>
      </div>
    </div>
  )
}

export default Login

