//import { Button } from '@mui/material';
import React from 'react';
import './styles/App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom"
import ProductDetailPage from './pages/ProductDetailPage';
import Test from './pages/Test';


function App() {
  return (
    <div className="App">
     {/*  <HomePage /> */}
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/ProductDetailPage" element={ <ProductDetailPage/> } />
        <Route path="/Test" element={ <Test/> } />
      </Routes>
    </div>
  );
}

export default App;
