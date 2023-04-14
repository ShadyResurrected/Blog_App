import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            molestias?
          </h2>
          <p className="info">
            <a className="author">lorem ipsum</a>
            <time>2023-04-14 14:34</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            cupiditate praesentium placeat vero pariatur quae fugiat expedita
            voluptatum recusandae aut.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            molestias?
          </h2>
          <p className="info">
            <a className="author">lorem ipsum</a>
            <time>2023-04-14 14:34</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            cupiditate praesentium placeat vero pariatur quae fugiat expedita
            voluptatum recusandae aut.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            molestias?
          </h2>
          <p className="info">
            <a className="author">lorem ipsum</a>
            <time>2023-04-14 14:34</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            cupiditate praesentium placeat vero pariatur quae fugiat expedita
            voluptatum recusandae aut.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
