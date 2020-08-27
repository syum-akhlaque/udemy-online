import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar ,Nav,NavDropdown} from 'react-bootstrap';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div className="App">
       <Header></Header>
       <Shop ></Shop>
    </div>
  );
}

export default App;
