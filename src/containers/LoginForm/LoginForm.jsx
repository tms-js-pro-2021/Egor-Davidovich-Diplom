import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import styles from './LoginForm.module.scss'
import Logo from '../../../public/image/logImage.svg'
import { setToken } from '../../redux/getToken/actions'
import api from '../../api'

const LoginForm = (props) => {
  const history = useHistory()

  const validate = Yup.object().shape({
    email: Yup.string()
      .email('Email is incorrect')
      .required('Email is required')
      .matches('kemalkalandarov@gmail.com', 'Email is incorrect'),
    password: Yup.string()
      .required('Password is required')
      .matches('test123', 'Password is incorrect'),
  })

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
            const token = data.token
            props.setUser(token)
            window.sessionStorage.token = token
            history.push('/')
          })
        }
      })
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }

  return (
    <div className={styles.form__container}>
      <h1 className={styles.title}>MyConference</h1>
      <img className={styles.logo} src={Logo} alt="logo" />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleLoginClick(values)
          resetForm()
        }}
      >
        {({ errors, values, touched, handleChange, handleSubmit }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              placeholder="EMAIL"
              name="email"
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className={styles.error__message}>{errors.email}</div>
            )}
            <input
              onChange={handleChange}
              className={styles.input}
              type="password"
              placeholder="PASSWORD"
              value={values.password}
              name="password"
            />
            {errors.password && touched.password && (
              <div className={styles.error__message}>{errors.password}</div>
            )}
            <button type="submit" className={styles.button__login}>
              LOG IN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => ({
  token: state.token,
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (token) => dispatch(setToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
