import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateData = () => {

  const params = useParams()

  const [data, setData] = useState({
    fullName: "",
    fcmToken: "string"
  });

  const navigate = useNavigate()

  useEffect(() => {
    // addEmployee()
  }, [])

const fetchdata = async () => {
  try {
    let ft = await axios.get(``)
  } catch (error) {
    
  }
}

  const updateEmployee = async () => {
    try {
      let response = await axios.put(`http://192.168.29.156:3041/api/user/update/${params.idUser}`, data, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjk3LCJpZERldmljZSI6OCwic2VyaWFsTnVtYmVyIjoiU0E0NTQ1YXM0NWE0IiwidmVyc2lvbk51bWJlciI6IjEuMCIsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6ImxvY2FsaG9zdCIsImlhdCI6MTcwMDYyODQyMiwiZXhwIjoxNzAzMjIwNDIyfQ.hiCSuGVM5cIkqpMJsNVez80w4d0p8cpRF-TNNSg5oe4',
          'Content-Type': 'application/json', // Add this line to specify the content type
        },
      });
      let result = response.data;
      console.log(result);
      setData(result.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const disp = () => {
    navigate('/')
  }

  return (
    <div>
      <div className='container'>
        <div>
          <button className='btn btn-primary' onClick={disp}>Display Posts</button>
        </div>
        <form >
          <p className='fw-bolder fs-1 text-center bg-dark text-warning m-2'>
            Create Post
          </p>
          <div className='d-flex flex-column'>
            <input
              type='text'
              name='fullName'
              value={data.fullName}
              onChange={handleChange}
              className='form-control mb-1 mt-2'
              placeholder='Enter Your fullname'
            ></input>
            <button className='btn btn-success' onClick={updateEmployee}>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default UpdateData