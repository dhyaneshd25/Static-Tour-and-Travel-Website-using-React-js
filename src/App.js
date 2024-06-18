import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/routes/home';
import About from './components/routes/about';
import Service from './components/routes/service';
import Contact from './components/routes/contact';
import { useState } from 'react';

export default function App() {

  return (
    

    <div className="App">
    
        
     <Routes>
      <Route path="/" element={<Home/>}/>
     
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    

     </Routes>
       
       

    </div>


  
  );
}


