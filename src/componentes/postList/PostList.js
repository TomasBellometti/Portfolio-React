import React /* useEffect, useState*/ from "react";
import Post from "../post/Post";
import PostPhoto from "../postPhoto/PostPhoto";
import "./postList.css";

//import axios from "axios";

export default function PostList() {
  /* useEffect(() => {
  //   getPosts();
  // }, []);

  // const [posteos, setPosteos] = useState([]);

  // const getPosts = async () => {
  //   const res = await axios.get("http://localhost:5000/api/posts/");

  //   setPosteos(res.data);
  //   console.log(res.data);
  // };*/

  return (
    <>
      <div className="postList">
        <h2>Trabajos realizados</h2>
        <Post />
        <PostPhoto />
        <Post />
        <Post />
      </div>
    </>
  );
}
