import React from 'react';
import s from './ThemeDropDown.module.css';
import clsx from 'clsx';

const ThemeDropDown = () => {
  return (
    <div className={s.dropeDown}>
      <div className={s.container}>
        <div className={s.themes}>
          <p className={clsx(s.themeLoink)}>Light</p>
          <p className={clsx(s.themeLoink, s.active)}>Dark</p>
          <p className={clsx(s.themeLoink)}>Violet</p>
        </div>
      </div>
    </div>
  );
};

export default ThemeDropDown;
