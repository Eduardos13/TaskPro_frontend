import React from 'react';
import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPage/AuthPage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import ScreenPage from './pages/ScreenPage/ScreenPage.jsx';
import Layout from './components/Layout/Layout.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ScreenPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
