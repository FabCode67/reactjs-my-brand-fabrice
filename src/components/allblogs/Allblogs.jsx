import React, { useState, useEffect } from 'react';
import './allblogs.css';
import { Link } from 'react-router-dom'


const Allblogs = () => {
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
    <div className='blogs'>
      {blogData.map((blog) => (
        <div key={blog._id} className='blogs-container'>
          <div className='image'>
            <img src={blog.blogImage} alt='' />
          </div>
          <div className='content'>
            <h4>{blog.blogTitle}</h4>
            <p dangerouslySetInnerHTML={{ __html: blog.blogContent.substring(0, 110) + '...' }}></p>
          </div>
          <div className='button'>
          <Link to={`/singleBlogPage?id=${blog._id}`}>more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allblogs;