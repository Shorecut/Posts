import React, { useEffect, useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const [post, setPost] = useState([]);
  async function getPost() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setPost(data);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <div className="block">
        {post.map((item) => (
          <div key={item.id} className="top_card">
            <a className="card1" href="#">
              <p>{item.title}</p>
              <p className="small">{item.body}</p>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBlog;
