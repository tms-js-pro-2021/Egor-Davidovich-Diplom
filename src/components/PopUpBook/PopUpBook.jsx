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

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';

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
  {
    type: 'number',
    label: 'MAX GUESTS',
    variant: 'outlined',
    name: 'guests',
    required: true,
  },
];

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
      aria-labelledby="alert-dialog-title"
    >
      <Button className={styles.popup__btnClose} onClick={handleClose} variant="contained" color="secondary">
        <CloseIcon />
      </Button>
      <DialogTitle className={styles.popup__title} id="alert-dialog-title">
        BOOKING
      </DialogTitle>
      <DialogContent className={styles.popup__content}>
        <div className={styles.room__info}>
          <span className={styles.room__info__title}>{item.description}</span>
          <span className={styles.room__info__other}>g.Minsk, Slobodskaya 121, room 32</span>
          <span className={styles.room__info__other}>9th Floor</span>
        </div>
        <div className={styles.popup__containerCheckboxes}>
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
      </DialogContent >
      <DialogActions>
        <Button onClick={handleClose} className={styles.popup__btn} color="secondary" variant="contained">
          CANCEL
        </Button>
        <Button onClick={addRoomFromList} className={styles.popup__btn} color="primary" autoFocus variant="contained">
          CONFIRM
        </Button>
      </DialogActions>
    </Dialog >
  );
};

export default PopUpBook;
