import React from 'react';
import { Route, Routes } from 'react-router';
import WelcomePage from './pages/WelcomePage/WelcomePage.jsx';
import AuthPage from './pages/AuthPage/AuthPage.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import Modal from './components/Modal/Modal.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/register" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
