import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import './css/main.css'

import { Home, Background ,Blogs, MensCollection,Products} from './exports/export'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/pages/background" element={<Background />} />

        <Route path="/blogs/expeditions/op-nepal" element={<Blogs />} />

        <Route path="/collections/mens-apparel" element={<MensCollection />} />

        <Route path="/products/:name" element={<Products />} />

      </Routes>
    </div>
  );
}

export default App;
