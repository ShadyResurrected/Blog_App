import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../component/Editor";

import {UserContext} from '../../Context/UserContext'


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const {server} = useContext(UserContext)

  const createNewPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files?.[0]);
    const response = await fetch(`${server}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      toast.success("Post Created!")
      setRedirect(true);
    }else{
      toast.error("Something went wrong!")
    }
  };

  if (redirect) return <Navigate to={"/"} />;

  return (
    <form onSubmit={createNewPost}>
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
      <button style={{ marginTop: "5px" }}>Create post</button>
    </form>
  );
};

export default CreatePost;
