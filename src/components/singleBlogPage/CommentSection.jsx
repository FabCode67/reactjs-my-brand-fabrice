import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const CommentSection = () => {

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
         {blogData1.comments?.map((comment, index) => (
              <div key={index} className='dispMessge'>
              <p dangerouslySetInnerHTML={{ __html: comment.username }}></p>
    <p dangerouslySetInnerHTML={{ __html: comment.comment }}></p></div>
))}

    </>
  )
}

export default CommentSection