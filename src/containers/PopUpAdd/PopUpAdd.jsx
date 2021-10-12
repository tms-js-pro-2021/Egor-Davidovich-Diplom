/* eslint-disable react/no-array-index-key */
import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import styles from './PopUpAdd.module.scss'

const textFieldSettings = [
  {
    type: 'text',
    label: 'ENTER NAME',
    variant: 'outlined',
    name: 'description',
    required: true,
  },
  {
    type: 'text',
    label: 'ENTER ADDRESS',
    variant: 'outlined',
    name: 'address',
    required: true,
  },
  {
    type: 'number',
    label: 'FLOOR',
    variant: 'outlined',
    name: 'floor',
    required: true,
  },
]

const PopUpAdd = ({ open, handleClose, handleAddRoom }) => {
  const validate = Yup.object().shape({
    description: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Name is required'),
    address: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Address is required'),
    floor: Yup.string().required('Floor is required'),
  })

  const addRoomFromList = (values) => {
    handleAddRoom({ ...values })
    handleClose()
  }

  return (
    <Formik
      initialValues={{
        description: '',
        address: '',
        floor: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        addRoomFromList(values)
        resetForm()
      }}
    >
      {({ errors, values, touched, handleChange, handleSubmit }) => (
        <Dialog
          className={styles.popup}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <Button
            className={styles.popup__btnClose}
            onClick={handleClose}
            variant="contained"
            color="secondary"
          >
            <CloseIcon />
          </Button>
          <Form onSubmit={handleSubmit}>
            <DialogTitle
              className={styles.popup__title}
              id="alert-dialog-title"
            >
              ADD NEW ROOM
            </DialogTitle>
            <DialogContent className={styles.popup__content}>
              {textFieldSettings.map((input, index) => (
                <div className={styles.popup__input} key={index}>
                  <TextField
                    fullWidth
                    type={input.type}
                    key={input.label}
                    label={input.label}
                    name={input.name}
                    variant={input.variant}
                    required={input.required}
                    value={values[input.name]}
                    onChange={handleChange}
                    inputProps={{ min: 0 }}
                  />
                  {errors[input.name] && touched[input.name] ? (
                    <div className={styles.popup__error}>
                      {errors[input.name]}
                    </div>
                  ) : null}
                </div>
              ))}
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                className={styles.popup__btn}
                color="secondary"
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={styles.popup__btn}
                color="primary"
                autoFocus
              >
                ADD ROOM
              </Button>
            </DialogActions>
          </Form>
        </Dialog>
      )}
    </Formik>
  )
}

export default PopUpAdd
