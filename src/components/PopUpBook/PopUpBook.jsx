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

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';

const inputSettings = [
  {
    type: "datetime-local",
    name: 'startDateTime',
    text: 'Start Date and Time:',
  },
  {
    type: "datetime-local",
    name: 'endDateTime',
    text: 'End Date and Time:',
  },
  {
    text: 'Guests:',
    type: 'number',
    label: 'Guests number',
    name: 'guests',
  },

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
];



const PopUpBook = ({ open, handleClose, id, ...item }) => {
  const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch(api.bookRoom, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Authorization:
  //         //   'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
  //       },
  //     })
  //       .then((data) => data.json())
  //       .then((data) => setRooms(data));
  //   } catch (error) {
  //     console.log('SERVER ERROR');
  //     console.log(data);
  //   }
  // }, []);

  const [inputValues, setInputValues] = useState({
    guests: '',
    startDateTime: '',
    endDateTime: '',
    meetRoom: id
  });

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


  // const [inputValues, setInputValues] = useState(inputSettings.reduce((acc,current) => {
  //   return {
  //     ...acc,
  //     [current.name]: '',
  //   }
  // }, {}));
  // console.log(inputValues);
  // console.log('checkboxes ', checkboxValues);


  const setInputValue = event => {
    console.log('EVENT ', event)
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const setCheckBoxValue = event => {
    setCheckBoxValues({
      stuff: {
        ...checkboxValues.stuff,
        [event.target.name]: event.target.checked,
      }
    });
  };



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
        .then(() => handleClose(), setInputValues({
          guests: '',
          startDateTime: '',
          endDateTime: '',
        }))
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
        {/* <div className={styles.popup__booking}> */}
        {/* <div>
            <label className={styles.popup__booking__title}>
              Choose a date for your appointment:
            </label>
            <input
              className={styles.popup__booking__input}
              type="date"
              name="meeting-date"
            />
          </div> */}
        {
          inputSettings.map((input) => {
            return (
              <div className={styles.popup__booking} key={input.name}>
                {
                  input.type !== 'checkbox' ? (
                    <div>
                      <div>{input.text}</div>
                      <div>
                        <TextField
                          className={styles.popup__booking__input}
                          value={inputValues[input.name]}
                          onChange={input.custom ? setCustomValue : setInputValue}
                          placeholder={input.label && input.label}
                          type={input.type}
                          select={input.select}
                          name={input.name}
                          inputProps={{ min: 0 }}
                        >
                        </TextField>
                      </div>
                    </div>
                  ) : (
                    <FormControlLabel
                      control={
                        <Checkbox
                          // value={inputValues[input.name]}
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
                }
              </div>
            )

          })
        }
        {/* <div className={styles.popup__booking__time}>
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
        </div> */}
        {/* <div className={styles.event}>
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
        </div> */}
        {/* <div>
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
        </div> */}
        {/* <Typography className={styles.popup__features} variant="h5">
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
                  name="projector"
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
                  name="webCam"
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
                  name="board"
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
                  name="catering"
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
                  name="coffee"
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
                  name="tea"
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
                  name="water"
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
        </div> */}
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
