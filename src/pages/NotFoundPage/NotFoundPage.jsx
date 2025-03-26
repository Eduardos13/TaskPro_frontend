import React from 'react';
import s from './NotFoundPage.module.css';
import sprite from '../../icons/all-icons.svg';

const NotFoundPage = () => {
  return (
    <section className={s.notFoundPage}>
      <div className={s.container}>
        <div className={s.notFoundText}>
          <p className={s.code}>404</p>
          <p className={s.notFoundTitle}>Page Not Found</p>
          <p className={s.notFoundNote}>
            We are sorry, but page you are looking for could not be found
          </p>
          <button className={s.goHome}>
            <svg className={s.arrowIcon} width="18" height="18">
              <use href={`${sprite}#icon-arrow-circle`} />
            </svg>
            Go back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
