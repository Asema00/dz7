import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Post() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const navigate = useNavigate();

  return (
      <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
              <button onClick={() => navigate(-1)}>Back to posts</button>
            </div>
        )}
      </div>
  );
}

export default Post;