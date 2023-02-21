import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';

const SideBlogs = () => {

    const [blogData, setBlogData] = useState([]);
        useEffect(() => {
      fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/', { mode: 'cors' })
        .then((res) => res.json())
        .then((data) => {
          const reversedData = data.data.reverse();
          setBlogData(reversedData);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <>
    {blogData.map((blog) => (
        <div key={blog._id} className='LB'>
          <div className='lPhoto'>
            <img src={blog.blogImage} alt='' />
          </div>
          <div className='lContent'>
          <Link to={`/singleBlogPage?id=${blog._id}`}> <p dangerouslySetInnerHTML={{ __html: blog.blogContent.substring(0, 110) + '...' }}></p>
    </Link>
          </div>
        </div>
      ))}
      </>
  )
}

export default SideBlogs