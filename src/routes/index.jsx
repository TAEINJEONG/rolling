import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import RollingPaperList from '../pages/RollingPaperList';
import Message from '../pages/message';
import Detail from '../pages/Detail';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<RollingPaperList />} />
          <Route path="/post/:id/message" element={<Message />} />
          <Route path="/post/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
