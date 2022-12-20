import React from "react";
import {Route,Routes} from "react-router-dom";
import { Aboutus,Universities,Home } from "./containers";
import { Navbar } from "./components";

import './App.css';

const App = () => {
  return(
    <div className="background_app">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/">
          <Route path="" element={<Universities/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="aboutus" element={<Aboutus/>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  )
}
export default App