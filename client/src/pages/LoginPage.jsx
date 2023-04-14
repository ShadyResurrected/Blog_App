import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'

const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const login = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/login',{
      method : 'POST',
      body : JSON.stringify({username,password}),
      headers : {'Content-Type' : 'application/json'},
      credentials : 'include'
    })

    if(response.ok){
      setRedirect(true)
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
        <form className='login' onSubmit={login}>
            <h1>Login</h1>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
  )
}

export default LoginPage