import React from 'react';
import './Cart.css';
import logo from '../../images/favicon.svg';
const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total, product) => total + product.price, 0); 
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        //console.log(product);
        total = total + course.price;
    }

    return (
        <div className="cart">
            <img src={logo} alt=""/>
            <h4>Order summary</h4>
            <p>Course Purches: {cart.length}</p >
            <p>Course Price: {total}</p>
            <h5>Total Price: {Number(total).toFixed(2)}</h5> 
            <button className="btn btn-warning mt-2 btn-sm">Review your Order</button>
        </div>
    );
};


export default Cart;

