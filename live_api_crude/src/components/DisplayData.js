import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const DisplayData = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchEmployeeList()
    }, [])

    const fetchEmployeeList = async () => {
        try {
            let response = await axios.get("http://192.168.29.156:3041/api/user/details?pagination=no&page=1&limit=10&role=Employee", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjk3LCJpZERldmljZSI6OCwic2VyaWFsTnVtYmVyIjoiU0E0NTQ1YXM0NTE3IiwidmVyc2lvbk51bWJlciI6IjEuMCIsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6ImxvY2FsaG9zdCIsImlhdCI6MTcwMDczMTIzNCwiZXhwIjoxNzAzMzIzMjM0fQ.oHWYryLMuE6iQvWBEizDFWstnJtbBF7GKv2eC9e1d5U"
                }
            })
            let result = response.data;
            console.log(result);
            setData(result.data)
        } catch (error) {
            console.error("Error", error)
        }
    }

    const delete_post = async (idUser) => {
        try {
            console.warn(idUser)
            let response = await axios.delete(`http://192.168.29.156:3041/api/user/delete`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjk3LCJpZERldmljZSI6OCwic2VyaWFsTnVtYmVyIjoiU0E0NTQ1YXM0NTE3IiwidmVyc2lvbk51bWJlciI6IjEuMCIsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6ImxvY2FsaG9zdCIsImlhdCI6MTcwMDczMTIzNCwiZXhwIjoxNzAzMzIzMjM0fQ.oHWYryLMuE6iQvWBEizDFWstnJtbBF7GKv2eC9e1d5U"
                },
                data: {
                    idUser: idUser,
                    idUserToTransferOrder: "1",
                },
            })
            console.warn("delete button clicked")
            let result = response.data;
            console.log(result);
            setData(result.data)
            window.location.reload();
        } catch (error) {
            console.error("Error", error)
        }
    }

    const handleUpdate = (id) => {
        const selectedEmployee = data.find((item) => item.idUser === id);
        console.log(selectedEmployee);
        navigate('/updatedata', { state: { selectedEmployee } });
    };

    return (
        <>
            <div className='container'>
                <div className='text-center fw-bolder fs-1 text-warning bg-dark p-2 m-2 '>Employee List</div>
                <div className='row text-center m-5'>
                    <div className='col-12'>
                        <Link to={'/addData'} ><button className='btn btn-success'>Registration</button></Link>
                    </div>
                </div>
                <div>
                    <div className='row border border-1 border-dark'>
                        <div className='col-2'>
                            <p className='fw-bolder fs-5 text-center'>ID</p>
                        </div>
                        <div className='col-2'>
                            <p className='fw-bolder fs-5 text-center'>Name</p>
                        </div>
                        <div className='col-2'>
                            <p className='fw-bolder fs-5 text-center'>Mobile Number</p>
                        </div>
                        <div className='col-2'>
                            <p className='fw-bolder fs-5 text-center'>Email</p>
                        </div>
                        <div className='col-2'>
                            <p className='fw-bolder fs-5 text-center'>Employee Code</p>
                        </div>
                        <div className='col-2'>
                            <p className='fw-bolder fs-5 text-center'>Action</p>
                        </div>
                    </div>
                </div>
                {data?.map((item, index) => (
                    <div>
                        <div className='row border border-1 border-dark'>
                            <div key={index} className='col-2 d-flex justify-content-center align-items-center'>
                                <p className='text-center'>{item.idUser}</p>
                            </div>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <p className='text-center'>{item.fullName}</p>
                            </div>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <p className='text-center'>{item.mobileNumber}</p>
                            </div>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <p className='text-center'>{item.email}</p>
                            </div>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <p className='text-center'>{item.employeeCode}</p>
                            </div>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <button type='button' onClick={()=> delete_post(item.idUser)} className='btn btn-danger'> Delete</button>
                                <button type='button' onClick={() => handleUpdate(item.idUser)} className='btn btn-warning'>Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayData