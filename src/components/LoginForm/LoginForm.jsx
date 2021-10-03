// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import styles from './LoginForm.module.scss';
import Logo from '../../image/logImage.svg';
import { Formik } from 'formik';
import { useHistory } from 'react-router';
import { setToken} from '../../redux/getToken/actions';
import { api } from '../../Api';

const LoginForm = (props) => {
  const history = useHistory();

  const handleLoginClick = (values) => {
    try {
      fetch(api.signIn, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            const token = data.token;
            props.setUser(token)
            history.push('/');
          });
        }
      });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

  return (
    <div className={styles.form__container}>
      <h1 className={styles.title}>MyConference</h1>
      <img className={styles.logo} src={Logo} />
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              placeholder="EMAIL"
              name="email"
              value={values.email}
            />
            <div className={styles.error__message}>{errors.email && errors.email}</div>
            <input
              onChange={handleChange}
              className={styles.input}
              type="password"
              placeholder="PASSWORD"
              value={values.password}
              name="password"
            />
            <button type="submit" className={styles.button__login}>
              LOG IN
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  setUser: token => dispatch(setToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
