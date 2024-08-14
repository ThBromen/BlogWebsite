import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './components/PostAuthor'; // Corrected component name to be capitalized
import { dummyPosts } from '../data'; // Import dummyPosts to get post data
import Thumbnail from '../images/art.jpg'; // Corrected the spelling of 'Thumbnail'

const PostDetail = () => {
  // Assuming you want to use the first post for demonstration; replace with actual logic as needed
  const post = dummyPosts[0];

  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor authorId={post.authorId} /> {/* Pass the authorId to PostAuthor */}
          <div className='post-detail__buttons'>
            <Link to={`/post/${post.id}/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/post/${post.id}/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>{post.title}</h1> {/* Display post title */}
        <div className='post-detail__thumbnail'> {/* Corrected spelling to 'thumbnail' */}
          <img src={Thumbnail} alt="Post Thumbnail" /> {/* Updated alt text */}
        </div>
        <p>{post.description}</p> {/* Display post description */}
        {/* Additional content can be added here */}
      </div>
    </section>
  );
};

export default PostDetail;
