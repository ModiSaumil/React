// components/ProductList.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../state/Action/actiion_index';
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 0, name: 'Product 1', price: 10, quantity: 1 },
        { id: 1, name: 'Product 2', price: 15, quantity: 1 },
        { id: 2, name: 'Product 3', price: 20, quantity: 1 },
    ];

    return (
        <div>
            <h2>Product List</h2>
            <div className='d-flex'>
                {products.map(product => (
                    <div key={product.id}>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="./logo512.png" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">Price: ${product.price}</p>
                                {/* <p class="card-text">Quantity: {product.quantity}</p> */}
                                <button className='btn btn-primary' onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default connect(null, { addToCart })(ProductList);
