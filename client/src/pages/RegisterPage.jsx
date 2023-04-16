import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

import { UserContext } from '../../Context/UserContext'

const RegisterPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)


  const {server} = useContext(UserContext)

  const register = async(e) => {
    e.preventDefault();
      const response = await fetch(`${server}/register`, {
        method : 'POST',
        body : JSON.stringify({username,password}),
        headers : {'Content-Type': 'application/json'}
      }) 
      if(response.status !== 200){
        toast.error("Registration Failed!")
      }else{
        toast.success('Registration Successful!')
        setRedirect(true)
      }

  }

  if(redirect) return <Navigate to={'/login'}/>

  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button>Register</button>
        </form>
  )
}

export default RegisterPage