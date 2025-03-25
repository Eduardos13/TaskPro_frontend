import React, { useContext } from 'react';
import s from './ThemeDropDown.module.css';
import clsx from 'clsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const ThemeDropDown = ({ isVisible }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={clsx(s.dropDown, { [s.dropDownVisible]: isVisible })}>
      <div className={s.container}>
        <ul className={s.themes}>
          <li
            className={clsx(s.themeLink, { [s.active]: theme === 'light' })}
            onClick={() => toggleTheme('light')}
          >
            Light
          </li>
          <li
            className={clsx(s.themeLink, { [s.active]: theme === 'dark' })}
            onClick={() => toggleTheme('dark')}
          >
            Dark
          </li>
          <li
            className={clsx(s.themeLink, {
              [s.active]: theme === 'violet',
            })}
            onClick={() => toggleTheme('violet')}
          >
            Violet
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeDropDown;
