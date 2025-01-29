import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Message from './pages/message';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
