import React, { useContext, useEffect, useState } from 'react'
import Post from '../component/Post'

import { UserContext } from '../../Context/UserContext'

const IndexPage = () => {

  const {server} = useContext(UserContext)

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${server}/post`).then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  }, [])
  return (
    <>
    {posts.length > 0 && posts.map(post => (
      <Post {...post}/>
    ))}
    </>
  )
}

export default IndexPage