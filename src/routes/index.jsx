import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import RollingPaperList from '../pages/list';
import Message from '../pages/message';
import Detail from '../pages/recipient-detail';
import ToPost from '../pages/post';
import Landing from '../pages/landing';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<RollingPaperList />} />
          <Route path="/post/:id/message" element={<Message />} />
          <Route path="/post" element={<ToPost />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="/post/:id/edit" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
