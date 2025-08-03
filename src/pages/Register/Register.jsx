import React from 'react';
import s from './Register.module.css';
import clsx from 'clsx';
import sprite from '../../icons/all-icons.svg';
import { Field, Form, Formik } from 'formik';
import { Link, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.welcome}>
      <div className={s.registrationForm}>
        <div className={s.container}>
          <div className={s.links}>
            <p className={clsx(s.active, s.linkToForm)}>Registration</p>
            <Link to="/auth/login" className={clsx(s.linkToForm)}>
              Log In
            </Link>
          </div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
              <Field
                className={s.formField}
                type="text"
                name="name"
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

export default Register;
