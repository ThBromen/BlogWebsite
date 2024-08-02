import React, { useState } from 'react';
import PostItem from './postItem';
import { dummyPosts } from '../../data';

const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <section className='posts'>
      {posts.length > 0 ? <div className='container posts__container'>
      {posts.map(({ id, thumbnail, category, title, description, authorId }) => (
        <PostItem
          key={id}
          postID={id}
          thumbnail={thumbnail}
          category={category}
          title={title}
          description={description}
          authorId={authorId}
        />
      ))}
      </div> :<h2 className='center'>No Post Found</h2>}
    </section>
  );
};

export default Posts;
