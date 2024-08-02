import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './../../images/Agric.jpg';

const PostAuthor = () => {
  return (
    <Link to="/posts/users/sdfsdf" className='post__author'>
      <div className="post__author-avatar">
        <img src={avatar} alt="Author Avatar" />
      </div>
      <div className="post__author-details">
        <h5>by: Bromen Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
