import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import {Navigate} from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const {setUserInfo,server} = useContext(UserContext)

  const login = async(e) => {
    e.preventDefault()
    const response = await fetch(`${server}/login`,{
      method : 'POST',
      body : JSON.stringify({username,password}),
      headers : {'Content-Type' : 'application/json'},
      credentials : 'include'
    })

    if(response.ok){
      toast.success('Successfully Logged In!');
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
    }else{
      toast.error('Invalid Credentials!');
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