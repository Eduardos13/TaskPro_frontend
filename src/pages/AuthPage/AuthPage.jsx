import React from 'react';
import s from './AuthPage.module.css';
import { Outlet } from 'react-router';

const AuthPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthPage;
