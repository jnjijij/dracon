import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Список постів</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={{ pathname: `/posts/${post.id}`, state: { post } }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
