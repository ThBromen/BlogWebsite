import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './components/PostAuthor';
import { dummyPosts } from '../data';
import Author3 from '../images/Author3.jpg'; // Ensure capitalization matches the file name

const PostDetail = () => {
  const post = dummyPosts[0];

  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor 
            name={post.authorName} 
            avatarUrl={post.authorAvatar} 
            time={post.time} 
            authorId={post.authorId} 
          />
          <div className='post-detail__buttons'>
            <Link to={`/post/${post.id}/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/post/${post.id}/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>{post.title}</h1>
        <div className='post-detail__thumbnail'>
          <img src={Author3} alt="Post Thumbnail" />
        </div>
        <p>{post.description}</p>
      </div>
    </section>
  );
};

export default PostDetail;
