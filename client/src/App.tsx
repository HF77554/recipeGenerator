import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Feature from './components/Body/Feature';
import Home from './components/Body/Home';
import FindDish from './components/Body/FindDish';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/finddish" element={<FindDish />} />
      </Routes>
    </>
  );
}

export default App;
