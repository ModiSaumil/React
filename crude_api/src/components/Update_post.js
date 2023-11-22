import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update_post = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [postData, setPostData] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    displayPost();
  }, []);

  const displayPost = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      setPostData(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const updatePost = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`, postData);
      console.log("Post-Update",postData.title)
      console.log("Post-Update",postData.body)
      // navigate("/")
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updatePost();
  };

  const disp = () => {
    navigate('/');
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleFormSubmit}>
          <p className='fw-bolder fs-1 text-center bg-dark text-warning m-2'>
            Update Post
          </p>
          <div className='d-flex flex-column'>
            <input
              type='text'
              name='title'
              value={postData.title}
              onChange={handleInputChange}
              className='form-control mb-1 mt-2'
              placeholder='Enter Your Title of Post'
            ></input>
            <input
              type='text'
              name='body'
              value={postData.body}
              onChange={handleInputChange}
              className='form-control mb-3'
              placeholder='Enter Your Body of Post'
            ></input>
            <button className='btn btn-success' onClick={updatePost}>
              Update Post
            </button>
          </div>
          <div className='mt-5 text-center'>
            <button className='btn btn-primary' onClick={disp}>Display Posts</button>
          </div>
        </form>
      </div>
    </>

  )
}

export default Update_post