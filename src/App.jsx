import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Colors from './pages/Colors';
import Typography from './pages/Typography';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="colors" element={<Colors />} />
          <Route path="typography" element={<Typography />} />
          {/* 라우터 내용 채우기 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
