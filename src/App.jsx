import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import From from './pages/From';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<From />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
