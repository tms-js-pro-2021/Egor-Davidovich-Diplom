import React from 'react';
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

const PopUpAdd = ({
  open,
  handleClose,
  handleAddRoom,
  setTitle,
  setGuests,
  setAddress,
  setFloor,
  title,
  guests,
  address,
  floor,
}) => {
  const addRoomFromList = () => {
    handleAddRoom();
    handleClose();
  };

  return (
    <Dialog
      className={styles.popup}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <Button onClick={handleClose} variant="contained">
        <CloseIcon />
      </Button>
      <div className={styles.popup__title}>
        <DialogTitle id="alert-dialog-title">ADD NEW ROOM</DialogTitle>
      </div>
      <DialogContent className={styles.popup__content}>
        <TextField
          label="ENTER NAME"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="ENTER ADDRESS"
          variant="outlined"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          type="number"
          label="FLOOR"
          variant="outlined"
          required
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          type="number"
          label="MAX GUESTS"
          variant="outlined"
          required
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          CANCEL
        </Button>
        <Button onClick={addRoomFromList} color="primary" autoFocus>
          ADD ROOM
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpAdd;

//       {/* <FormGroup>
//         <FormControlLabel control={<Checkbox />} label="Projector" />
//         <FormControlLabel control={<Checkbox />} label="Web Camera" />
//         <FormControlLabel control={<Checkbox />} label="Board" />
//         <FormControlLabel control={<Checkbox />} label="Catering" />
//         <FormControlLabel control={<Checkbox />} label="Coffee" />
//         <FormControlLabel control={<Checkbox />} label="Tea" />
//         <FormControlLabel control={<Checkbox />} label="Water" />
//       </FormGroup> */}
