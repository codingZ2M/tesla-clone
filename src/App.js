import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import CarModelSpec from './components/shop/CarModelSpec';
import  HeaderMenu  from './components/HeaderMenu';
import  Home  from './components/Home';


function App() {
  return (
    <div className="App">
        <HeaderMenu/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/carModelSpec/:selectedCarModel" element={<CarModelSpec/>} />
          </Routes>        
    </div>
  );
}

export default App;
