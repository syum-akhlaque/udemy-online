import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    console.log('added',cart);

    // const total = cart.reduce((total, product) => total + product.price, 0); 
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        //console.log(product);
        total = total + course.price;
    }

    return (
        <div>
            
            <h4>Order summary</h4>
            <p>Course Order: {cart.length}</p>
            <p>Product Price: {total}</p>
            
            <p>Total Price: {Number(total).toFixed(2)}</p>
            
        </div>
    );
};


export default Cart;

