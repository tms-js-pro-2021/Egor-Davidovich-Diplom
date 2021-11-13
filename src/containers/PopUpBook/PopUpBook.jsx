/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import CloseIcon from '@material-ui/icons/Close'
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
// eslint-disable-next-line import/no-unresolved
import { Alert } from '@material-ui/lab'
import api from '../../Api'
import { inputSettings, checkboxSettings, radioSettings } from './settings'
import styles from './PopUpBook.module.scss'

const PopUpBook = ({
  open,
  handleClose,
  events,
  setEvents,
  setDates,
  dates,
  id,
  defaultFetch,
  token,
  ...item
}) => {
  const validate = Yup.object().shape({
    startDateTime: Yup.string().required('Start Date and Time is required'),
    endDateTime: Yup.string().required('End Date and Time is required'),
    customFields: Yup.object().shape({
      eventType: Yup.string().required('EVENT TYPE is required'),
    }),
  })

  const handleBookRoom = (values) => {
    const updatedState = {
      ...values,
      startDateTime: Date.parse(values.startDateTime),
      endDateTime: Date.parse(values.endDateTime),
    }
    try {
      defaultFetch(api.bookRoom, 'POST', token, updatedState)
        .then((response) => response.json())
        .then((response) => {
          setDates((prev) => [...prev, response], handleClose())
        })
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }

  return (
    <Dialog className={styles.popup} open={open} onClose={handleClose}>
      <Button
        className={styles.popup__btnClose}
        onClick={handleClose}
        variant="contained"
        color="secondary"
      >
        <CloseIcon />
      </Button>
      <DialogTitle className={styles.popup__title} id="scroll-dialog-title">
        BOOKING
      </DialogTitle>
      <Formik
        initialValues={{
          guestsCount: '',
          startDateTime: '',
          endDateTime: '',
          meetRoom: id,
          customFields: {
            eventType: '',
          },
          stuff: {
            coffee: false,
            tea: false,
            projector: false,
            water: false,
            webCamera: false,
            board: false,
            catering: false,
          },
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleBookRoom(values)
          resetForm()
        }}
      >
        {({ errors, values, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <DialogContent className={styles.popup__content}>
              <div className={styles.room__info}>
                <span className={styles.room__info__title}>
                  {item.description}
                </span>
                <span className={styles.room__info__other}>
                  Address: {item.address}
                </span>
                <span className={styles.room__info__other}>
                  Floor: {item.floor}
                </span>
              </div>
              {inputSettings.map((input, index) => {
                return (
                  <div className={styles.popup__booking__input} key={index}>
                    <div className={styles.popup__booking__title}>
                      {input.text}
                    </div>
                    <div>
                      <TextField
                        value={values[input.name]}
                        onChange={handleChange}
                        placeholder={input.label && input.label}
                        type={input.type}
                        name={input.name}
                        inputProps={{ min: 0 }}
                      />
                      {errors[input.name] && touched[input.name] ? (
                        <div className={styles.popup__error}>
                          <Alert severity="error">{errors[input.name]}</Alert>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
              <FormControl component="fieldset">
                <FormLabel component="legend">EVENT TYPE:</FormLabel>
                <RadioGroup row>
                  {radioSettings.map((radio, index) => {
                    return (
                      <FormControlLabel
                        value={radio.value}
                        key={index}
                        control={
                          <Radio
                            color={radio.color}
                            onChange={handleChange}
                            name="customFields.eventType"
                          />
                        }
                        label={radio.label}
                      />
                    )
                  })}
                  {errors?.customFields?.eventType &&
                  touched?.customFields?.eventType ? (
                    <div className={styles.popup__error}>
                      <Alert severity="error">
                        {errors.customFields?.eventType}
                      </Alert>
                    </div>
                  ) : null}
                </RadioGroup>
              </FormControl>
              <Typography className={styles.popup__features} variant="h6">
                Choose extra features:
              </Typography>
              <div className={styles.popup__container__checkboxes}>
                <FormGroup className={styles.popup__checkbox}>
                  {checkboxSettings.map((checkbox, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            onChange={handleChange}
                            color={checkbox.color}
                            name={`stuff.${checkbox.name}`}
                          />
                        }
                        label={
                          <>
                            <img
                              className={styles.popup__img}
                              src={checkbox.src}
                              alt=""
                            />
                            {checkbox.text}
                          </>
                        }
                      />
                    )
                  })}
                </FormGroup>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                className={styles.popup__btn}
                color="secondary"
                variant="contained"
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                className={styles.popup__btn}
                color="primary"
                autoFocus
                variant="contained"
              >
                CONFIRM
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

export default PopUpBook
