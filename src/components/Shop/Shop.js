import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [courses ,setCourses] = useState(fakeData);
    console.log(fakeData);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (course) =>{
      const newCart = [...cart,course];
      setCart(newCart);
    }
    return (
        <div className='shop-container'>
          <div className="Course-container">
                {
                  courses.map( data => 
                    <Course 
                    handleAddProduct={handleAddProduct} 
                    course={data}
                    ></Course>
                )
                }
          </div>
          <div className="cart-container">
            <Cart cart ={cart}></Cart>
            
          </div>
            
        </div>
           
    );
};
export default Shop;