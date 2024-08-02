import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor'; // Make sure the path is correct

const PostItem = ({ id, thumbnail, category, title, description, authorId }) => {
  return (
    <article className='post'>
      <div className='post__thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='post__content'>
        <Link to={`/posts/${id}`}><h3>{title}</h3></Link>
        <p>{description}</p>
        <div className='post__footer'>
          <PostAuthor authorId={authorId} />
          <Link to={`/posts/category/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
