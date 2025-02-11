import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../pages/Layout';
import RollingPaperList from '../pages/list';
import Message from '../pages/message';
import Detail from '../pages/recipient-detail';
import ToPost from '../pages/post';
import Landing from '../pages/landing';
import ErrorPage from '../pages/error';
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
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
