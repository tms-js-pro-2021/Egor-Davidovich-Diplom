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
import { api } from '../../Api'
import styles from './PopUpBook.module.scss'
import Projector from '../../image/projector.svg'
import WebCam from '../../image/webcam.svg'
import Catering from '../../image/catering.svg'
import Tea from '../../image/tea.svg'
import Water from '../../image/water.svg'
import Coffee from '../../image/coffee.svg'
import Board from '../../image/board.png'

const inputSettings = [
  {
    type: 'datetime-local',
    name: 'startDateTime',
    text: 'Start Date and Time:',
  },
  {
    type: 'datetime-local',
    name: 'endDateTime',
    text: 'End Date and Time:',
  },
  {
    text: 'Guests:',
    type: 'number',
    label: 'Guests number',
    name: 'guestsCount',
  },
]

const checkboxSettings = [
  {
    type: 'checkbox',
    name: 'projector',
    src: Projector,
    text: 'Projector',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'webCam',
    src: WebCam,
    text: 'Web Camera',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'board',
    src: Board,
    text: 'Board',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'catering',
    src: Catering,
    text: 'Catering',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'coffee',
    src: Coffee,
    text: 'Coffee',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'tea',
    src: Tea,
    text: 'Tea',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'water',
    src: Water,
    text: 'Water',
    color: 'primary',
  },
]

const radioSettings = [
  {
    type: 'radio',
    value: 'Interview',
    label: 'Interview',
    color: 'primary',
  },
  {
    type: 'radio',
    value: 'Presentation',
    label: 'Presentation',
    color: 'primary',
  },
  {
    type: 'radio',
    value: 'Meeting',
    label: 'Meeting',
    color: 'primary',
  },
  {
    type: 'radio',
    value: 'Webinar',
    label: 'Webinar',
    color: 'primary',
  },
]

const PopUpBook = ({
  open,
  handleClose,
  events,
  setEvents,
  setDates,
  dates,
  id,
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
      fetch(api.bookRoom, {
        method: 'POST',
        body: JSON.stringify(updatedState),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setDates((prev) => [...prev, response]),
            handleClose()
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
