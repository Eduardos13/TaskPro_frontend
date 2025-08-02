import React from 'react';
import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPage/AuthPage.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import ScreenPage from './pages/ScreenPage/ScreenPage.jsx';
import Layout from './components/Layout/Layout.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/welcome" element={<ScreenPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/register" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
