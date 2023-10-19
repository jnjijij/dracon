import React, { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <h1>Пости</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} onPostSelect={handlePostSelect} />
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div>
          <h2>Детальна інформація про пост</h2>
          <p>ID: {selectedPost.id}</p>
          <p>Title: {selectedPost.title}</p>
          <p>Body: {selectedPost.body}</p>
        </div>
      )}
    </div>
  );
}

export default Posts;
