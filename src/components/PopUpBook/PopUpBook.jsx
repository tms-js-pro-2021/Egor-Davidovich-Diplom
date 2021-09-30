import React, { useState, useEffect } from 'react';
import { api } from '../../Api';
import CloseIcon from '@material-ui/icons/Close';
import styles from './PopUpBook.module.scss';
import Projector from '../../image/projector.svg';
import WebCam from '../../image/webcam.svg';
import Catering from '../../image/catering.svg';
import Tea from '../../image/tea.svg';
import Water from '../../image/water.svg';
import Coffee from '../../image/coffee.svg';
import Board from '../../image/board.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';

const inputSettings = [
  {
    type: 'date',
    name: 'meeting-date',
  },
  {
    type: 'time',
    name: 'meeting-startTime',
  },
  {
    type: 'time',
    name: 'meeting-endTime',
  },

  {
    fullWidth: true,
    type: 'number',
    label: 'Guests number',
    variant: 'outlined',
    name: 'guests-number',
    required: true,
  },
];

const PopUpBook = ({ open, handleClose, ...item }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    try {
      fetch(api.bookRoom, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      })
        .then((data) => data.json())
        .then((data) => setRooms(data));
    } catch (error) {
      console.log('SERVER ERROR');
      console.log(data);
    }
  }, []);

  const [inputValues, setInputValues] = useState({
    guests: '',
    startDateTime: '',
    endDateTime: '',
    stuff: {
      coffee: false,
      tea: false,
      projector: false,
      water: false,
      webCamera: false,
      board: false,
      catering: false,
    },
    custoFields: {
      eventType: '',
    },
  });
  console.log(item);

  const setInputValue = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleBookRoom = () => {
    const bookRoom = {
      guests,
      startDateTime,
      endDateTime,
      stuff: {
        coffee,
        tea,
        projector,
        water,
        webCamera,
        board,
        catering,
      },
      custoFields: {
        eventType,
      },
    };
    try {
      fetch(api.bookRoom, {
        method: 'POST',
        body: JSON.stringify(bookRoom),
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setRooms([...rooms, { ...newRoom, ...response }]);
        });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

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
          <span className={styles.room__info__other}>Address: {item.address}</span>
          <span className={styles.room__info__other}>Floor: {item.floor}</span>
        </div>
        <div className={styles.popup__booking}>
          <div>
            <label className={styles.popup__booking__title}>
              Choose a date for your appointment:
            </label>
            <input
              className={styles.popup__booking__input}
              // value={inputValues[input.name]}
              // onChange={setInputValue}
              type="date"
              name="meeting-date"
            />
          </div>
          <div className={styles.popup__booking__time}>
            <div>
              <label className={styles.popup__booking__title}> Start time:</label>
              <input
                className={styles.popup__booking__input}
                // value={inputValues[input.name]}
                // onChange={setInputValue}
                type="time"
                name="meeting-startTime"
              />
            </div>
            <div className={styles.popup__booking__time__end}>
              <label className={styles.popup__booking__title}> End time:</label>
              <input
                className={styles.popup__booking__input}
                // value={inputValues[input.name]}
                // onChange={setInputValue}
                type="time"
                name="meeting-endTime"
              />
            </div>
          </div>
        </div>
        <div className={styles.event}>
          <Accordion scroll="body">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Event type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                  defaultValue="Presentation"
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Presentation"
                    control={<Radio color="primary" />}
                    label="Presentation"
                  />
                  <FormControlLabel
                    value="Webinar"
                    control={<Radio color="primary" />}
                    label="Webinar"
                  />
                  <FormControlLabel
                    value="Meeting"
                    control={<Radio color="primary" />}
                    label="Meeting"
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <TextField
            className={styles.popup__guests}
            fullWidth
            type="number"
            label="Guests number"
            variant="outlined"
            name="guests number"
            required
            inputProps={{ min: 0 }}
            // value={inputValues[input.name]}
            // onChange={setInputValue}
          />
        </div>
        <Typography className={styles.popup__features} variant="h5">
          Choose extra features
        </Typography>
        <div className={styles.popup__container__checkboxes}>
          <FormGroup className={styles.popup__checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Projector} />
                  Projector
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={WebCam} />
                  WebCamera
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Board} />
                  Board
                </React.Fragment>
              }
            />
          </FormGroup>
          <FormGroup className={styles.popup__checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Catering} />
                  Catering
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Coffee} />
                  Coffee
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Tea} />
                  Tea
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  // value={inputValues[input.name]}
                  // onChange={setInputValue}
                  color="primary"
                />
              }
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Water} />
                  Water
                </React.Fragment>
              }
            />
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
  );
};

export default PopUpBook;
