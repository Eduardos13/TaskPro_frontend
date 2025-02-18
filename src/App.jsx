import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import ScreenPage from './components/ScreenPage/ScreenPage';

const App = () => {
  return (
    <>
      <Header />
      <ScreenPage />
    </>
  );
};

export default App;
