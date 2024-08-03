import React, { useState } from 'react';
import Author1 from "../images/author1.jpg";
import Author2 from "../images/author2.jpg";
import Author3 from "../images/Author3.jpg";
import Author4 from "../images/author4.jpg";
import Author5 from "../images/author5.jpg";
import Author6 from "../images/author6.jpg";
import { Link } from 'react-router-dom';

const authorData = [
  { id: 1, avatar: Author1, name: "Bromen", post: 3 },
  { id: 2, avatar: Author2, name: "Muhimpundu Sandline", post: 5 },
  { id: 3, avatar: Author3, name: "Niyitanga Robert", post: 0 },
  { id: 4, avatar: Author4, name: "Hakizimana Obed", post: 4 },
  { id: 5, avatar: Author5, name: "Hategekimana Janvier", post: 2 },
  { id: 6, avatar: Author6, name: "Ineza Gentille", post: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorData);

  return (
    <section className='authors'>
      {authors.length > 0 ? (
        <div className='container authors__container'>
          {authors.map(({ id, avatar, name, post }) => (
            <Link key={id} to={`/posts/user/${id}`} className='author'>
              <div className='author__avatar'>
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className='author__info'>
                <h4>{name}</h4>
                <p>Posts: {post}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className='center'>No users/authors found.</h2>
      )}
    </section>
  );
};

export default Authors;
