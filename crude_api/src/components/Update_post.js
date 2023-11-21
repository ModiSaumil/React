import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update_post = () => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    console.warn("id get", params.id);
  }, [])

  const updatePost = async () => {
    let url = await axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  }



  const handleFormSubmit = (e) => {
    e.preventDefault();
      updatePost();
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
            Update Post
          </p>
          <div className='d-flex flex-column'>
            <input
              type='text'
              name='title'

              
              className='form-control mb-1 mt-2'
              placeholder='Enter Your Title of Post'
            ></input>
            <input
              type='text'
              name='body'

              
              className='form-control mb-3'
              placeholder='Enter Your Body of Post'
            ></input>
            <button className='btn btn-success' onClick={updatePost}>Update Post</button>
          </div>
        </form>
      </div>
    </>

  )
}

export default Update_post