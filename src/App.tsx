import React from 'react';
import { slide as Menu } from 'react-burger-menu'
// import './App.css';
// import logo from './logo.png'
// import {Home} from './Home'




 function App() {
  console.log('App running')
   return (
    <Menu>
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    
  </Menu>
//     <>
//       <div className='top'>
//        <img src={logo} width='300px' height='80px'/>
//       </div>
//       <Home /> 
      
//     </>
  );
 }

 export default App;
