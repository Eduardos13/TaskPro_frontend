import React from 'react';
import s from './ThemeDropDown.module.css';
import clsx from 'clsx';

const ThemeDropDown = () => {
  return (
    <div className={s.dropDown}>
      <div className={s.container}>
        <ul className={s.themes}>
          <li className={clsx(s.themeLink)}>Light</li>
          <li className={clsx(s.themeLink, s.active)}>Dark</li>
          <li className={clsx(s.themeLink)}>Violet</li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeDropDown;
