import React from 'react';
import s from './Login.module.css';
import clsx from 'clsx';
import sprite from '../../icons/all-icons.svg';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div className={s.welcome}>
      <div className={s.loginForm}>
        <div className={s.container}>
          <div className={s.links}>
            <Link to="/auth/register" className={clsx(s.linkToForm)}>
              Registration
            </Link>
            <p className={clsx(s.linkToForm, s.active)}>Log In</p>
          </div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
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
                  placeholder="Confirm a password"
                />
                <svg className={s.passEye} width="18" height="18">
                  <use href={`${sprite}#icon-eye`} />
                </svg>
              </div>

              <button className={s.loginBtn} type="submit">
                Log In Now
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
