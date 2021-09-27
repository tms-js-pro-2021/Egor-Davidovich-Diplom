import React, { useState } from 'react';
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

const PopUpBook = ({ open, handleClose, handleAddRoom, ...item }) => {
  const [inputValues, setInputValues] = useState({
    description: '',
    address: '',
    floor: '',
    guests: '',
  });

  const addRoomFromList = () => {
    handleAddRoom({ ...inputValues });
    handleClose();
    setInputValues({
      description: '',
      address: '',
      floor: '',
      guests: '',
    });
  };

  const setInputValue = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Dialog
      className={styles.popup}
      open={open}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
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
          <span className={styles.room__info__other}>g.Minsk, Slobodskaya 121, room 32</span>
          <span className={styles.room__info__other}>9th Floor</span>
        </div>
        <div className={styles.popup__booking}>
          <div>
            <label className={styles.popup__booking__title} for="meeting-date">
              Choose a date for your appointment:
            </label>
            <input className={styles.popup__booking__input} type="date" name="meeting-date" />
          </div>
          <div className={styles.popup__booking__time}>
            <div>
              <label className={styles.popup__booking__title} for="meeting-startTime">
                Start time:
              </label>
              <input
                className={styles.popup__booking__input}
                type="time"
                name="meeting-startTime"
              />
            </div>
            <div className={styles.popup__booking__time__end}>
              <label className={styles.popup__booking__title} for="meeting-endTime">
                End time:
              </label>
              <input className={styles.popup__booking__input} type="time" name="meeting-endTime" />
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
              <Typography variant="h7">Event type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup defaultValue="Presentation" name="radio-buttons-group">
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
          />
        </div>
        <div className={styles.popup__container__checkboxes}>
          <FormGroup className={styles.popup__checkbox}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Projector} />
                  Projector
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={WebCam} />
                  WebCamera
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
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
              control={<Checkbox color="primary" />}
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Catering} />
                  Catering
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Coffee} />
                  Coffee
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <React.Fragment>
                  <img className={styles.popup__img} src={Tea} />
                  Tea
                </React.Fragment>
              }
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
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
          onClick={addRoomFromList}
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
