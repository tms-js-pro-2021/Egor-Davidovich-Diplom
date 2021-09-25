import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import styles from './PopUpBook.module.scss';
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
        <div>
          <span className={styles.room__title}>{item.description}</span>
          <span>g.Minsk, Slobodskaya 121, room 32</span>
          <span>9th Floor</span>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Projector" />
            <FormControlLabel control={<Checkbox  />} label="WebCamera" />
            <FormControlLabel control={<Checkbox  />} label="Board" />
            <FormControlLabel control={<Checkbox  />} label="Catering" />
            <FormControlLabel control={<Checkbox  />} label="Coffee" />
            <FormControlLabel control={<Checkbox  />} label="Tea" />
            <FormControlLabel control={<Checkbox  />} label="Water" />
          </FormGroup>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={styles.popup__btn} color="primary">
          CANCEL
        </Button>
        <Button onClick={addRoomFromList} className={styles.popup__btn} color="primary" autoFocus>
          CONFIRM
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpBook;
