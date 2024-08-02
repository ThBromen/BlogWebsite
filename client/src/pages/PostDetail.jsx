import React from 'react'
import { Link } from 'react-router-dom'
import postAuthor from './components/PostAuthor'
import Thumnail from '../images/art.jpg'
const PostDetail = () => {
  return (
    <section  className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'> 
          <postAuthor/>
          <div className='post-detail__buttons'>
            <Link to={'/post/werwer/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'post/werwer/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
<h1>This is a post Title</h1>
<div className='post-detail__thumail'>
  <img src={Thumnail} alt="" />
</div>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, accusantium sequi rerum
     inventore eum fuga rem cum ex eaque id corrupti itaque deleniti nostrum repellat eligendi 
     aspernatur blanditiis laborum a praesentium aliquam aliquid odio! Beatae neque porro tenetur 
     sed? Architecto.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur nulla eligendi 
      voluptates mollitia non accusantium possimus, id esse quam quisquam reprehenderit nam veniam
       quaerat libero voluptatem, rem adipisci et optio a? Voluptates accusantium repellat quas reprehenderit 
       libero laudantium! Ipsa incidunt commodi dolore tempore cumque exercitationem quos fuga consectetur quo.
     </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet eos perspiciatis necessitatibus?
       Quos nulla tempora totam? Ut pariatur voluptatum doloribus fugiat earum, id excepturi corrupti inventore 
       omnis iste doloremque deleniti hic vel ducimus eaque debitis soluta deserunt architecto facilis ea ratione
        voluptates? Amet qui explicabo praesentium aut tempora cumque id impedit totam maxime facilis molestiae 
        aliquid ratione quia esse, commodi pariatur laborum ad, doloremque suscipit quod? Similique, nostrum perspiciatis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati ratione tempora fugit,
         quas tempore voluptatem sit quod nihil repellendus unde officia!</p>
      </div>
      
    </section>
  )
}

export default PostDetail 