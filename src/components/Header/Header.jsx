import React, { useEffect, useRef, useState } from 'react';
import s from './Header.module.css';
import sprite from '../../icons/all-icons.svg';
import ThemeDropDown from '../ThemeDropDown/ThemeDropDown.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const Header = () => {
  const user = useSelector(selectUser);

  const [isThemeDropOpen, setIsThemeDropOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsThemeDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <svg
            className={s.burgerMenu}
            width="24"
            height="24"
            onClick={toggleSideBar}
          >
            <use href={`${sprite}#icon-menu`} />
          </svg>
          <div
            className={s.themeContainer}
            onClick={() => setIsThemeDropOpen((prev) => !prev)}
            ref={dropDownRef}
          >
            <p className={s.themeText}>Theme</p>
            <svg
              className={clsx(s.arrowDown, {
                [s.arrowDownRotated]: isThemeDropOpen,
              })}
              width="16"
              height="16"
            >
              <use href={`${sprite}#icon-chevron-down`} />
            </svg>
            <ThemeDropDown isVisible={isThemeDropOpen} />
          </div>
          <div className={s.userContainer}>
            <p className={s.userName}>{user.name}</p>
            <svg className={s.userAvatar} width="32" heigh="32">
              <use href={`${sprite}#icon-user`} />
            </svg>
          </div>
        </div>
      </header>
      {isSideBarOpen && (
        <div className={s.backdrop} onClick={closeSideBar}></div>
      )}
      <SideBar isOpen={isSideBarOpen} />
    </>
  );
};

export default Header;
