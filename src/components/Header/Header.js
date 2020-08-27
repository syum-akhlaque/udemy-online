//rsc for shortcut
import React from 'react';
import logo from '../../images/favicon.svg';
import './Header.css';
const header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=""/>
           <nav>
               <a href="/Course">Course</a>
               <a href="/review">Review</a>
               <a href="/manage">Manage</a>
               <a href="/cart">Cart</a>

           </nav>
        </div>
    );
};

export default header;