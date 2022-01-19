import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Dames from './pages/Dames/Dames.js';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/dames" exact element={<Dames />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;