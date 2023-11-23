import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Adddata = () => {

    const [data, setData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        password: "",
    });

    const navigate = useNavigate()

    useEffect(() => {
        // addEmployee()
    }, [])

    const addEmployee = async () => {
        try {
            let response = await axios.post('http://192.168.29.156:3041/api/user/register', data, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjk3LCJpZERldmljZSI6OCwic2VyaWFsTnVtYmVyIjoiU0E0NTQ1YXM0NTE3IiwidmVyc2lvbk51bWJlciI6IjEuMCIsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6ImxvY2FsaG9zdCIsImlhdCI6MTcwMDczMTIzNCwiZXhwIjoxNzAzMzIzMjM0fQ.oHWYryLMuE6iQvWBEizDFWstnJtbBF7GKv2eC9e1d5U',
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
                        <input
                            type='text'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            className='form-control mb-3'
                            placeholder='Enter Your email id unique'
                        ></input>
                        <input
                            type='text'
                            name='mobileNumber'
                            value={data.mobileNumber}
                            onChange={handleChange}
                            className='form-control mb-3'
                            placeholder='Enter Your mobile number unique'
                        ></input>
                        <input
                            type='text'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            className='form-control mb-3'
                            placeholder='Enter Your password minimum 6 character'
                        ></input>

                        <button className='btn btn-success' onClick={addEmployee}>Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Adddata