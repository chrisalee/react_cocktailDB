import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/cocktail/:id' element={<SingleCocktail/>} />
      </Routes>
    </Router>
  );
}

export default App;
