import React, { useState } from 'react';
import RoomList from '../RoomList';
import styles from './MainContent.module.scss';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const MainContent = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  // const [roomStuff, setRoomStuff] = useState({
  //   title: '',
  //   guests: 0,
  //   address: '',
  //   floor: 0;
  //   booked: Date.now(),
  //   stuff: {
  //     coffee: true,
  //     tea: true,
  //     projector: false,
  //     water: true,
  //     webCamera: false,
  //     board: true,
  //     catering: false,
  //   },
  // });

  return (
    <div className={styles.main}>
      <button onClick={() => setIsShowPopup(true)} className={styles.button__add}>
        <AddToPhotosOutlinedIcon
          style={{
            fontSize: '4rem',
          }}
        />
        <span className={styles.button__add__text}>ADD NEW ROOM</span>
      </button>
      <RoomList />
      {isShowPopup && (
        <div className={styles.popup}>
          <div className={styles.popup__wrapper}>
            <Button variant="contained">
              <CloseIcon />
            </Button>
            <div>
              <TextField id="outlined-basic" label="ENTER NAME" variant="outlined" required />
              <TextField id="outlined-basic" label="ENTER" variant="outlined" required />
              <TextField
                id="outlined-basic"
                type="number"
                label="MAX GUESTS"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-basic"
                type="number"
                label="FLOOR"
                variant="outlined"
                required
              />
            </div>
            {/* <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Projector" />
              <FormControlLabel control={<Checkbox />} label="Web Camera" />
              <FormControlLabel control={<Checkbox />} label="Board" />
              <FormControlLabel control={<Checkbox />} label="Catering" />
              <FormControlLabel control={<Checkbox />} label="Coffee" />
              <FormControlLabel control={<Checkbox />} label="Tea" />
              <FormControlLabel control={<Checkbox />} label="Water" />
            </FormGroup> */}
            <button>CONFIRM</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
