import React from 'react'

function Home(props) {
    console.warn("home", props.carddata)
    console.warn("props", props)
    // console.warn(props.carddata[0].carddata.price)
    return (
        <>
            {/* <h1>Home page</h1> */}
            <div className='container-fluid'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="./logo512.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">I-phone 14</h5>
                                <p className="card-text">Price 1000$</p>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary'
                                    onClick={() =>
                                        props.addToCart({ price: 1000, name: "i_phone_14" })}
                                ><a href="#" className="btn btn-primary">Add to cart</a></button>
                                <button className='btn btn-primary '
                                    onClick={() =>
                                        props.removetocart({ price: 1000, name: "i_phone_14" })}
                                ><a href="#" className="btn btn-primary">remove to cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="./logo512.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">I-phone 14 pro</h5>
                                <p className="card-text">Price 1299$</p>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary'
                                    onClick={() =>
                                        props.addToCart({ price: 1299, name: "i_phone_14_pro" })}
                                ><a href="#" className="btn btn-primary">Add to cart</a></button>
                                <button className='btn btn-primary '
                                    onClick={() =>
                                        props.removetocart({ price: 1299, name: "i_phone_14_pro" })}
                                ><a href="#" className="btn btn-primary">remove to cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="./logo512.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">I-phone 14 PRO MAX</h5>
                                <p className="card-text">Price 1599$</p>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary'
                                    onClick={() =>
                                        props.addToCart({ price: 1599, name: "i_phone_14_pro_max" })}
                                ><a href="#" className="btn btn-primary">Add to cart</a></button>
                                <button className='btn btn-primary '
                                    onClick={() =>
                                        props.removetocart({ price: 1599, name: "i_phone_14_pro_max" })}
                                ><a href="#" className="btn btn-primary">remove to cart</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                   
                {/* <h3>Total : {props.carddata[0].carddata.price}</h3> */}
            </div>
        </>
    )
}

export default Home;