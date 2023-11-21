import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Create_Post = () => {
  const navigate = useNavigate()

  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 10,
  });

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const addPost = async () => {
    try {
      let response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
      let result = response.data;
      console.log(result);
      navigate('/createpost');
      postData.title = "";
      postData.body = "";
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(postData.title === "" && postData.body === ""){
      alert("Please fill The fields!!!")
    }else{
      addPost();
    }
  };

  const disp = () => {
    navigate('/')
  }

  return (
    <>
      <div className='container'>
      <div>
        <button className='btn btn-primary' onClick={disp}>Display Posts</button>
      </div>
        <form onSubmit={handleFormSubmit}>
          <p className='fw-bolder fs-1 text-center bg-dark text-warning m-2'>
            Create Post
          </p>
          <div className='d-flex flex-column'>
            <input
              type='text'
              name='title'
              value={postData.title}
              onChange={handleChange}
              className='form-control mb-1 mt-2'
              placeholder='Enter Your Title of Post'
            ></input>
            <input
              type='text'
              name='body'
              value={postData.body}
              onChange={handleChange}
              className='form-control mb-3'
              placeholder='Enter Your Body of Post'
            ></input>
            <button className='btn btn-success' onClick={addPost}>Add Post</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Create_Post