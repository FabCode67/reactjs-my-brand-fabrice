import React, { useState } from 'react';
import { useNavigate  , useLocation } from 'react-router-dom';

const AddComment = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get('comment');
    const token = localStorage.getItem('token');
    fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${id}/comment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, tesxt/plain, */*',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        comment: comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data.message);
        setNewComment('');
        event.target.reset();
        navigate(`/singleBlogPage?id=${id}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea
        rows={10}
        cols={10}
        placeholder='comment'
        name='comment'
        value={newComment}
        onChange={handleCommentChange}
      ></textarea>
      <button type='submit'>add comment</button>
    </form>
  );
};

export default AddComment;
