import React from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage.jsx';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import ScreenPage from './components/ScreenPage/ScreenPage.jsx';
import Card from './components/Card/Card.jsx';
import Modal from './components/Modal/Modal.jsx';
import Column from './components/Column/Column.jsx';
import Board from './Board/Board.jsx';

const App = () => {
  return (
    <>
      <Header />
      {/* <Modal /> */}
      {/* <ScreenPage /> */}
      {/* <Card /> */}
      {/* <Column /> */}
      <Board />
    </>
  );
};

export default App;
