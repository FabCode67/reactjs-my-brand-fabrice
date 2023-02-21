import React from 'react';
import SideBlogs from './SideBlogs';
import MainBlog from './MainBlog';
import './singleBlogPage.css';

const SingleBlogPage = () => {
  return (
    <div className='singlePage'>
      <div className='blogContainer'>
      <MainBlog/>
<div className='rightBlog'>
 <SideBlogs/>
</div>
</div>
</div>
)
}
export default SingleBlogPage;





