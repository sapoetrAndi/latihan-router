import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';  

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App;

