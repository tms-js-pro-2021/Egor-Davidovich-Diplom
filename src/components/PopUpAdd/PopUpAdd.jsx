import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Formik } from 'formik'
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
  const validate = Yup.object({
    description: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Name is required'),
    address: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Address is required'),
    floor: Yup.string().required('Floor is required'),
  })

  const [inputValues, setInputValues] = useState({
    description: '',
    address: '',
    floor: '',
  })

  const addRoomFromList = () => {
    handleAddRoom({ ...inputValues })
    handleClose()
    setInputValues({
      description: '',
      address: '',
      floor: '',
    })
  }

  const setInputValue = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Formik inputValues={inputValues} validationSchema={validate}>
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
        <DialogTitle className={styles.popup__title} id="alert-dialog-title">
          ADD NEW ROOM
        </DialogTitle>
        <DialogContent className={styles.popup__content}>
          {textFieldSettings.map((input) => (
            <TextField
              className={styles.popup__input}
              type={input.type}
              key={input.label}
              label={input.label}
              name={input.name}
              variant={input.variant}
              required={input.required}
              value={inputValues[input.name]}
              onChange={setInputValue}
              inputProps={{ min: 0 }}
            />
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
            onClick={addRoomFromList}
            variant="contained"
            className={styles.popup__btn}
            color="primary"
            autoFocus
          >
            ADD ROOM
          </Button>
        </DialogActions>
      </Dialog>
    </Formik>
  )
}

export default PopUpAdd
