import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import ScreenPage from './components/ScreenPage/ScreenPage';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import Column from './components/Column/Column';

const App = () => {
  return (
    <>
      <Header />
      {/* <Modal /> */}
      {/* <ScreenPage /> */}
      {/* <Card /> */}
      <Column />
    </>
  );
};

export default App;
