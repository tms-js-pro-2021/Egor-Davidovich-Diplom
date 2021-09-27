import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import styles from './PopUpAdd.module.scss';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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

const PopUpAdd = ({ open, handleClose, handleAddRoom }) => {
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
      <Button
        className={styles.popup__btnClose}
        onClick={handleClose}
        variant="contained"
        color="secondary"
      >
        <CloseIcon />
      </Button>
      <DialogTitle className={styles.popup__title} id="alert-dialog-title">
        ADD NEW ROOM
      </DialogTitle>
      <DialogContent className={styles.popup__content}>
        {textFieldSettings.map((input) => (
          <TextField
            className={styles.popup__input}
            type={input.type}
            key={input.label}
            label={input.label}
            name={input.name}
            variant={input.variant}
            required={input.required}
            value={inputValues[input.name]}
            onChange={setInputValue}
            inputProps={{ min: 0, maxLength: 50 }}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          className={styles.popup__btn}
          color="secondary"
        >
          CANCEL
        </Button>
        <Button
          onClick={addRoomFromList}
          variant="contained"
          className={styles.popup__btn}
          color="primary"
          autoFocus
        >
          ADD ROOM
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpAdd;
