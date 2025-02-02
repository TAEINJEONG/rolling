import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Colors from './pages/Colors';
import Typography from './pages/Typography';
import './index.css';
import Button from './components/common/button';
import addemoji from './assets/images/add-emoji.svg';

function App() {
  return (
    <BrowserRouter>
      <Button variant="primary" size="xl" disabled={false}>
        구경해보기
      </Button>
      <Button variant="outlined" size="md" disabled={false} icon={addemoji}>
        추가
      </Button>
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
