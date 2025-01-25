import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 라우터 내용 채우기 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
