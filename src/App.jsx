import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import ScreenPage from './components/ScreenPage/ScreenPage';
import Card from './components/Card/Card';

const App = () => {
  return (
    <>
      <Header />
      {/* <ScreenPage /> */}
      <Card />
    </>
  );
};

export default App;
