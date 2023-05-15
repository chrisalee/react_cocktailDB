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
        <Route path="/react_cocktailDB" element={<Home/>}  />
        <Route path="/react_cocktailDB/about" element={<About/>} />
        <Route path='/react_cocktailDB/cocktail/:id' element={<SingleCocktail/>} />
        <Route path="/" element={<Home/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
