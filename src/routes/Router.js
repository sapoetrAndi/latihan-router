import React from "react";
import { Routes,Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

const Router = () => {
  return(
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
      </React.Fragment>
    </div>
  )
}

export default Router;