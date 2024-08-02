import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__category'>
        <li><Link to="posts/category/Agriculture">Agriculture</Link></li> 
        <li><Link to="posts/category/Business">Business</Link></li>
        <li><Link to="posts/category/Education">Education</Link></li>
        <li><Link to="posts/category/Entertainment">Entertainment</Link></li>
        <li><Link to="posts/category/Art">Art</Link></li>
        <li><Link to="posts/category/Investment">Investment</Link></li>
        <li><Link to="posts/category/Uncategorised">Uncategorised</Link></li>
        <li><Link to="posts/category/Weather">Weather</Link></li>
      </ul>
      <div className='footer__copyright'> 
        <small>All Rights Reserved &copy;2024 Copyright, Bromen</small>
      </div>
    </footer>
  );
};

export default Footer;
   