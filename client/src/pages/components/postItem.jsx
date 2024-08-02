import React from 'react';
import { Link } from 'react-router-dom';
import postAuthor from './postAuthor';



const PostItem = ({ id, thumbnail, category, title, description, authorId }) => {
  return (
    <article className='post'>
      <div className='post__thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='post__content'>
        <Link to={`/post/${id}`}><h3>{title}</h3></Link>
        <p>{description}</p>
        <div className='post__footer'>
          <postAuthor/>
          <Link to={`/posts/category/${category}`}>{category}</Link>
        </div>
      </div> 

    </article>
  );
};

export default PostItem;