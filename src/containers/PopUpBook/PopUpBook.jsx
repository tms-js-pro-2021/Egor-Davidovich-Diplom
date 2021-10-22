/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
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
import api from '../../api'
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
  const [inputValues, setInputValues] = useState({
    guestsCount: '',
    startDateTime: '',
    endDateTime: '',
    meetRoom: id,
    customFields: {
      eventType: '',
    },
  })

  const [checkboxValues, setCheckBoxValues] = useState({
    stuff: {
      coffee: false,
      tea: false,
      projector: false,
      water: false,
      webCamera: false,
      board: false,
      catering: false,
    },
  })

  const setInputValue = (event) => {
    if (event.target.type === 'radio') {
      setInputValues({
        ...inputValues,
        customFields: {
          eventType: event.target.value,
        },
      })
    } else {
      setInputValues({
        ...inputValues,
        [event.target.name]: event.target.value,
      })
    }
  }

  const setCheckBoxValue = (event) => {
    setCheckBoxValues({
      stuff: {
        ...checkboxValues.stuff,
        [event.target.name]: event.target.checked,
      },
    })
  }

  const handleBookRoom = () => {
    const updatedState = {
      ...checkboxValues,
      ...inputValues,
      startDateTime: Date.parse(inputValues.startDateTime),
      endDateTime: Date.parse(inputValues.endDateTime),
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
      <DialogContent className={styles.popup__content}>
        <div className={styles.room__info}>
          <span className={styles.room__info__title}>{item.description}</span>
          <span className={styles.room__info__other}>
            Address: {item.address}
          </span>
          <span className={styles.room__info__other}>Floor: {item.floor}</span>
        </div>
        {inputSettings.map((input, index) => {
          return (
            <div className={styles.popup__booking__input} key={index}>
              <div className={styles.popup__booking__title}>{input.text}</div>
              <div>
                <TextField
                  value={inputValues[input.name]}
                  onChange={setInputValue}
                  placeholder={input.label && input.label}
                  type={input.type}
                  name={input.name}
                  inputProps={{ min: 0 }}
                />
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
                    <Radio color={radio.color} onChange={setInputValue} />
                  }
                  label={radio.label}
                />
              )
            })}
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
                      onChange={setCheckBoxValue}
                      color={checkbox.color}
                      name={checkbox.name}
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
          onClick={handleBookRoom}
          className={styles.popup__btn}
          color="primary"
          autoFocus
          variant="contained"
        >
          CONFIRM
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PopUpBook
