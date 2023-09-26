import React from 'react';

function PostDetails(props) {
  const { location } = props;
  const { post } = location.state;

  return (
    <div>
      <h1>Деталі посту</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
