import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../state/Action/actiion_index';

const ShoppingCart = ({ cart, totalAmount, removeFromCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className='d-flex'>
                {cart.map(item => (
                    <div key={item.id}>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="./logo512.png" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Price: ${item.price}</p>
                                <p class="card-text">Quantity: {item.quantity}</p>
                                <p class="card-text">Total Price: ${item.totalPrice}</p>
                                <button className='btn btn-primary' onClick={() => removeFromCart(item)}>Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='text-danger'>Total Amount: ${totalAmount}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalAmount: state.totalAmount,
    };
};

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
