import React from 'react';
import { Link } from 'react-router-dom';

const PostAuthor = ({ name, avatarUrl, time, authorId }) => {
  return (
    <Link to={`/posts/users/${authorId}`} className='post__author'>
      <div className="post__author-avatar">
        <img src={avatarUrl} alt={`${name}'s Avatar`} />
      </div>
      <div className="post__author-details">
        <h5>by: {name}</h5>
        <small>{time}</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
