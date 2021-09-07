// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LoginForm.module.css';
import Logo from '../../image/logImage.svg';
import { Formik } from 'formik';
import { useHistory } from 'react-router';

const LoginForm = () => {
  let history = useHistory();

  const handleLoginClick = (values) => {
    try {
      fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((data) => {
        if (data.status === 200) {
          history.push('/order');
        }
      });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

  return (
    <div className="form-container">
      <h1 className="title">MyConference</h1>
      <img className="logo" src={Logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Please enter email';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          handleLoginClick(values);
          resetForm();
        }}
      >
        {({ values, handleChange, errors, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="userInput"
              type="text"
              placeholder="EMAIL"
              name="email"
              value={values.email}
            />
            <div className="error-message">{errors.email && errors.email}</div>
            <input
              onChange={handleChange}
              className="userInput"
              type="password"
              placeholder="PASSWORD"
              value={values.password}
              name="password"
            />
            <button type="submit" className="logInBtn">
              LOG IN
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
