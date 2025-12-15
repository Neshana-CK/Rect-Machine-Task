import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20)));
  }, []);

  return (
    <div className="container">
      <h2>Posts</h2>
      <div className="list">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card clickable"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <h4>{post.title}</h4>
            <p>{post.body.substring(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
