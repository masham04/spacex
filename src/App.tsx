import React from 'react';
import './App.css';
import logo from './logo.png'
import {Home} from './Home'




 function App() {
  return(
    <>
      <div className='top'>
       <img src={logo} width='300px' alt='logo' height='80px'/>
      </div>
      <Home /> 
      
    </>
  );
 }

 export default App;
