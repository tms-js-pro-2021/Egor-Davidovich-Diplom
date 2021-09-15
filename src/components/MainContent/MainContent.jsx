import React, { useState } from 'react';
import styles from './MainContent.module.scss';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';

import RoomList from '../RoomList';

const MainContent = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  // const [roomStuff, setRoomStuff] = useState({
  //   title: '',
  //   guests: 0,
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
          <div className={styles.popup__wrapper}></div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
