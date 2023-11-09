import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { bindActionCreators } from "redux";
import {actionCreate} from "../state/state_index"

const Home = () => {
    const dispatch  = useDispatch();
    const {subqty,addqty} = bindActionCreators(actionCreate,dispatch);
    const {subqty1,addqty1} = bindActionCreators(actionCreate,dispatch);
    const {subqty2,addqty2} = bindActionCreators(actionCreate,dispatch);

    const {subrs,addrs} = bindActionCreators(actionCreate,dispatch);
    const {subrs1,addrs1} = bindActionCreators(actionCreate,dispatch);
    const {subrs2,addrs2} = bindActionCreators(actionCreate,dispatch);

    const quantity =useSelector(state=>state.qty)
    const quantity1 =useSelector(state=>state.qty1)
    const quantity2 =useSelector(state=>state.qty2)

    const rupees =useSelector(state=>state.rs)
    const rupees1 =useSelector(state=>state.rs1)
    const rupees2 =useSelector(state=>state.rs2)
    
    let total = rupees+rupees1+rupees2

    const sub = () => {
        if (quantity > 0) {
            subqty(1);
            subrs(100);
        }
    };
    
    const add = ()=>{
        addqty(1)
        addrs(100)
    }

    const sub1 = () => {
        if (quantity1 > 0) {
            subqty1(1);
            subrs1(200);
        }
    };
    
    const add1 = ()=>{
        addqty1(1)
        addrs1(200)
    }

    const sub2 = () => {
        if (quantity2 > 0) {
            subqty2(1);
            subrs2(300);
        }
    };
    
    const add2 = ()=>{
        addqty2(1)
        addrs2(300)
    }

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/menu-item-3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <button className='btn btn-primary' onClick={sub}><i class="fa-solid fa-minus"></i></button>
                                <h5 className="card-title text-center ms-5 me-5">Add-to-Cart</h5>
                                <button className='btn btn-primary' onClick={add}><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <h1 className='text-center'>Price: 100 Rs.</h1>
                            <h6 className='text-center'>Quantity:{quantity}</h6>
                            <h6 className='text-center text-danger fw-bold fs-4'>Total:{rupees}</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/menu-item-4.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <button className='btn btn-primary' onClick={sub1}><i class="fa-solid fa-minus"></i></button>
                                <h5 className="card-title text-center ms-5 me-5">Add-to-Cart</h5>
                                <button className='btn btn-primary' onClick={add1}><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <h1 className='text-center'>Price: 200 Rs.</h1>
                            <h6 className='text-center'>Quantity:{quantity1}</h6>
                            <h6 className='text-center text-danger fw-bold fs-4'>Total:{rupees1}</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/menu-item-5.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <button className='btn btn-primary' onClick={sub2}><i class="fa-solid fa-minus"></i></button>
                                <h5 className="card-title text-center ms-5 me-5">Add-to-Cart</h5>
                                <button className='btn btn-primary' onClick={add2}><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <h1 className='text-center'>Price: 300 Rs.</h1>
                            <h6 className='text-center'>Quantity:{quantity2}</h6>
                            <h6 className='text-center text-danger fw-bold fs-4'>Total:{rupees2}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center mt-5 text-danger fw-bold'>Total Price: {total}</h1>
        </div>
    )
}

export default Home