import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import RollingPaperList from '../pages/RollingPaperList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rolling-paper" element={<RollingPaperList />} />
          <Route path="/post/:id/message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
