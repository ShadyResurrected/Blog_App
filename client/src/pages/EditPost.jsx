import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../component/Editor";

import {UserContext} from '../../Context/UserContext'

const EditPost = () => {
  const { id } = useParams();
  const {server} = useContext(UserContext)

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`${server}/post/${id}`).then(response => {
        response.json().then(postInfo => {
            setTitle(postInfo.title)
            setContent(postInfo.content)
            setSummary(postInfo.summary)
        })
    })
  },[])

  const updatePost = async(e) => {
    e.preventDefault();
    const data = new FormData()
    data.set('title',title)
    data.set('summary',summary)
    data.set('content', content)
    data.set('id', id)
    if(files?.[0]){
        data.set('file', files?.[0])
    }
    const response = await fetch(`${server}/post`, {
        method : "PUT",
        body : data,
        credentials : 'include'
    })
    if(response.ok){
      toast.success("Post Edited Successfully!")
        setRedirect(true)
    }
  };

  if (redirect) return <Navigate to={`/post/${id}`} />;

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Edit post</button>
    </form>
  );
};

export default EditPost;
