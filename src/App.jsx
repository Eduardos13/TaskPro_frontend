import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import ScreenPage from './components/ScreenPage/ScreenPage';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';

const App = () => {
  return (
    <>
      <Header />
      <Modal />
      {/* <ScreenPage /> */}
      {/* <Card /> */}
    </>
  );
};

export default App;
