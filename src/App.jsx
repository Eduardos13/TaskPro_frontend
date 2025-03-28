import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import AuthPage from './pages/AuthPage/AuthPage.jsx';
import { Route, Routes } from 'react-router';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
