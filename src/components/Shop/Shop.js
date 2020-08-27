import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import { Container,Col,Row} from 'react-bootstrap';
const Shop = () => {
    const [courses ,setCourses] = useState(fakeData);
    console.log(fakeData);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (course) =>{
      const newCart = [...cart,course];
      setCart(newCart);
    }
    return ( 
      
        <div>
          <Container fluid>
            <Row>
              <Col md={10}>
                  {
                    courses.map( data => 
                      <Course handleAddProduct={handleAddProduct} course={data}
                      ></Course>
                  )
                  }
              </Col>
              <Col>     
                <Cart cart ={cart}></Cart>
              </Col>
            </Row>
          </Container>
        </div>  
    );

};
export default Shop;