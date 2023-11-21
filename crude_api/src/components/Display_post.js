import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Display_post = () => {

  const [data, setdata] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchdata()
  }, [])

  const create_post = () => {
    navigate('/createpost')
  }

  const fetchdata = async () => {
    let url = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let response = url.data
    console.log(response)
    setdata(response)
  }


  const delete_post = () => {
    console.log("post deleted")
  }

  return (
    <>
      <div>Display_post</div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
              <button type='button' onClick={create_post} className='btn btn-info'>Create Post</button>
          </div>
        </div>
        <div className='row border border-4 border-grey'>
          <div className='col-1'>
            USERID
          </div>
          <div className='col-1'>
            ID
          </div>
          <div className='col-4'>
            TITLE
          </div>
          <div className='col-4'>
            DETAILS
          </div>
          <div className='col-2'>
            ACTIONS
          </div>

        </div>
        {
          data?.map((item, index) => (
            <div className='row' key={index}>
              <div className='col-1 border border-4 border-grey' >
                <p>{item.userId}</p>
              </div>
              <div className='col-1 border border-4 border-grey'>
                <p>{item.id}</p>
              </div>
              <div className='col-4 border border-4 border-grey'>
                <p>{item.title}</p>
              </div>
              <div className='col-4 border border-4 border-grey'>
                <p>{item.body}</p>
              </div>
              <div className='col-2 border border-4 border-grey'>
                <button type='button' onClick={delete_post} className='btn btn-danger'> Delete</button>
                <button type='button' className='btn btn-warning'><Link to={'/updatepost/' + item.id}>Update</Link></button>
              </div>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default Display_post