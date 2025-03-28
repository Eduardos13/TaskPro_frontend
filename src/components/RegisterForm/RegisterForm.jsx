import React from 'react';
import s from './RegisterForm.module.css';
import clsx from 'clsx';
import sprite from '../../icons/all-icons.svg';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <div className={s.welcome}>
      <div className={s.registrationForm}>
        <div className={s.container}>
          <div className={s.links}>
            <p className={clsx(s.active, s.linkToForm)}>Registration</p>
            <p
              className={clsx(s.linkToForm)}
              onClick={() => navigate('/auth/login')}
            >
              Log In
            </p>
          </div>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            onSubmit={() => {}}
          >
            <Form className={s.form}>
              <Field
                className={s.formField}
                type="text"
                name="username"
                placeholder="Enter your name"
              />
              <Field
                className={s.formField}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <div className={s.passWrapper}>
                <Field
                  className={clsx(s.formField, s.passwordField)}
                  type="password"
                  name="password"
                  placeholder="Create a password"
                />
                <svg className={s.passEye} width="18" height="18">
                  <use href={`${sprite}#icon-eye`} />
                </svg>
              </div>

              <button className={s.registerBtn} type="submit">
                Register Now
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
