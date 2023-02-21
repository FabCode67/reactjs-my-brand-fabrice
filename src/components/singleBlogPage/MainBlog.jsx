import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddComent from './AddComent';
import CommentSection from './CommentSection';
const MainBlog = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    console.log(id);
    const [blogData1, setBlogData1] = useState({});
    useEffect(() => {
      fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${id}`, { mode: 'cors' })
        .then((res) => res.json())
        .then((data) => {
          const realData = data.data;
          const reversedComments = realData.comments.reverse();
          setBlogData1({
            ...realData,
            comments: reversedComments
          });
        })
        .catch((error) => console.log(error));
    }, [id]);

  return (
   <>
    <div key={id} className='leftBlog'>
          <div className='sImage'>
            <img src={blogData1.blogImage} alt='' />
          </div>
          <div className='sContent'>
          <h3 dangerouslySetInnerHTML={{ __html: blogData1.blogTitle }}></h3>
          <p dangerouslySetInnerHTML={{ __html: blogData1.blogContent }}></p>
          </div>
          <div className='sComment'>
           <AddComent/>
          </div>
          <div className='sMessages'>
          <CommentSection/>
</div>
</div>
   </>
  )
}

export default MainBlog