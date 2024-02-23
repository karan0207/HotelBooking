import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import List from './pages/List/List.jsx';
import Hotel from './pages/Hotel/Hotel.jsx';
import './App.css';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/hotels' element={<List/>}/> 
    <Route path='/hotels/:id' element={<Hotel/>}/> 
   </Routes>
  )
}

export default App
