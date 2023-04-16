import React, { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import toast from 'react-hot-toast'

const Header = () => {
  const {setUserInfo,userInfo,server} = useContext(UserContext)


  useEffect(() => {
    fetch(`${server}/profile`, {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo)
      });
    });
  }, []);


  const logout = async () => {
    const response = await fetch(`${server}/logout`,{
      method : 'POST',
      credentials : 'include'
    })
    if(response.ok){
      toast.success("Logged Out Successfully!")
      setTimeout(() => {
        setUserInfo(null)
      }, 2000)
      return <Navigate to={'/'}/>
    }
  }

  const username = userInfo?.username


  return (
    <header>
      <Link to="/" className="logo">
        Namify
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}</span>
            <Link to="/create" >Create new post</Link>
            <a onClick={logout} >Logout</a>
          </>
        )}

        {!username && (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
