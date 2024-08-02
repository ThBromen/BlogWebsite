import React, { useState } from 'react';
import { dummyPosts } from '../data';
import PostItem from './components/postItem'; 

const CategoryPost = () => {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <section >
      {posts.length > 0 ? (
        <div className='container posts__container'>
          {posts.map(({ id, thumbnail, category, title, description, authorId }) => (
            <PostItem
              key={id}
              id={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorId={authorId}
            />
          ))}
        </div>
      ) : (
        <h2 className='center'>No Post Found</h2>
      )}
    </section>
  );
};

export default CategoryPost
