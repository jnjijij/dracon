import React from 'react';

function Post({ post, onPostSelect }) {
  return (
    <div>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <button onClick={() => onPostSelect(post)}>Докладніше</button>
    </div>
  );
}

export default Post;
