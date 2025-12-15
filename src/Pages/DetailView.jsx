import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default DetailView;
