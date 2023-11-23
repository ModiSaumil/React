import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateData = () => {

  const location = useLocation();
  const selectedEmployee = location.state ? location.state.selectedEmployee : null;
  const [newFullName, setNewFullName] = useState(selectedEmployee ? selectedEmployee.fullName : '');
  const navigate = useNavigate()


  useEffect(() => {
    console.log('Selected Employee:', selectedEmployee);
  }, [selectedEmployee]);

  const handleUpdate = () => {
    updateEmployee(selectedEmployee.idUser, { fullName: newFullName });
    navigate("/")
  };

  const updateEmployee = async () => {
    try {
      let response = await axios.put(
        `http://192.168.29.156:3041/api/user/update/${selectedEmployee.idUser}`,
        { fullName: newFullName },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjk3LCJpZERldmljZSI6OCwic2VyaWFsTnVtYmVyIjoiU0E0NTQ1YXM0NTE3IiwidmVyc2lvbk51bWJlciI6IjEuMCIsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6ImxvY2FsaG9zdCIsImlhdCI6MTcwMDczMTIzNCwiZXhwIjoxNzAzMzIzMjM0fQ.oHWYryLMuE6iQvWBEizDFWstnJtbBF7GKv2eC9e1d5U',
            'Content-Type': 'application/json',
          },
        }
      );

      let result = response.data;
      console.log(result);
      setNewFullName(result.data);

    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }

  return (
    <div>
      <div className='container'>
        <form >
          <p className='fw-bolder fs-1 text-center bg-dark text-warning m-2'>
            Create Post
          </p>
          <div className='d-flex flex-column'>
            <input
              type='text'
              name='fullName'
              value={newFullName}
              onChange={(e) => setNewFullName(e.target.value)}
              className='form-control mb-1 mt-2'
              placeholder='Enter Your fullname'
            ></input>

            <button className='btn btn-success' onClick={handleUpdate}>Update Employee</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateData

