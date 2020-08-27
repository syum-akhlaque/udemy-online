import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button,Card} from 'react-bootstrap';

const Course = (props) => {
    const {img, title, price} = props.course;
    return (
        <div className='course'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <h2>${price}</h2>
                    </Card.Text>
                     <Button onClick={()=>props.handleAddProduct(props.course)} variant="warning">{<FontAwesomeIcon icon={faShoppingCart} />}Enroll Now</Button> 
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;