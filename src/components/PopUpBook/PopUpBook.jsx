import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
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
    name: 'guests',
  },
]

const checkboxSettings = [
  {
    type: 'checkbox',
    name: 'projector',
    src: Projector,
    text: 'Projector',
  },
  {
    type: 'checkbox',
    name: 'webCam',
    src: WebCam,
    text: 'Web Camera',
  },
  {
    type: 'checkbox',
    name: 'board',
    src: Board,
    text: 'Board',
  },
  {
    type: 'checkbox',
    name: 'catering',
    src: Catering,
    text: 'Catering',
  },
  {
    type: 'checkbox',
    name: 'coffee',
    src: Coffee,
    text: 'Coffee',
  },
  {
    type: 'checkbox',
    name: 'tea',
    src: Tea,
    text: 'Tea',
  },
  {
    type: 'checkbox',
    name: 'water',
    src: Water,
    text: 'Water',
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
    guests: '',
    startDateTime: '',
    endDateTime: '',
    meetRoom: id,
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
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
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
        .then((response) => setEvents(response))
        .then((response) => setDates(response))
        .then(
          () => handleClose(),
          setInputValues({
            guests: '',
            startDateTime: '',
            endDateTime: '',
          })
        )
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }

  return (
    <Dialog
      className={styles.popup}
      open={open}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      overflow="scroll"
    >
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
        {inputSettings.map((input) => {
          return (
            <div className={styles.popup__booking__input}>
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
        <Typography className={styles.popup__features} variant="h6">
          Choose extra features:
        </Typography>
        <div className={styles.popup__container__checkboxes}>
          <FormGroup className={styles.popup__checkbox}>
            {checkboxSettings.map((input) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={setCheckBoxValue}
                      color="primary"
                      name={input.name}
                    />
                  }
                  label={
                    <React.Fragment>
                      <img className={styles.popup__img} src={input.src} />
                      {input.text}
                    </React.Fragment>
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
