/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
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
  const [file, setFile] = useState('')

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

  const sendImage = () => {
    const form = new FormData()
    form.append('image', file)

    fetch(
      'https://server.kemalkalandarov.lol/api/images?resource=ed-rooms&id=123',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=---011000010111000001101001',
        },
      }
    )
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  console.log(file);

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
                      <Alert severity="error">{errors[input.name]}</Alert>
                    </div>
                  ) : null}
                </div>
              ))}
            </DialogContent>
            <DialogActions>
              <Card sx={{ width: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={file ? URL.createObjectURL(file) : ''}
                />
                <CardActions>
                  <Button variant="contained" component="label">
                    Upload image
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        setFile(e.target.files[0])
                      }}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    component="label"
                    onClick={sendImage}
                  >
                    Save Image
                  </Button>
                </CardActions>
              </Card>
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
