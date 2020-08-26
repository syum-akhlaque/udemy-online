import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Course = (props) => {
    const {img, title, price} = props.course;
    return (
        <div className='course'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='course-title'>{title}</h4>
                <br/>
                <h2>${price}</h2>
                <br/>
                 <button className = 'btn' onClick={()=>props.handleAddProduct(props.course)}>{<FontAwesomeIcon icon={faShoppingCart} />}add to cart</button>

            </div>
           
        </div>
    );
};

export default Course;