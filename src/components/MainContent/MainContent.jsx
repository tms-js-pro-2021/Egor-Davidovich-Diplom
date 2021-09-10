import React, { useEffect, useState } from 'react';
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
    <div
      className={styles.main}
      style={{
        position: 'relative',
      }}
    >
      <button onClick={() => setIsShowPopup(true)}>click</button>
      <button className={styles.button__add}>
        <AddToPhotosOutlinedIcon
          style={{
            fontSize: '4rem',
          }}
        />
        <span className={styles.button__add__text}>ADD NEW ROOM</span>
      </button>
      <RoomList />
      {isShowPopup && (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: 'rgba(0,0,0, .5)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              background: 'rgba(0,0,0, .5)',
              width: '300px',
              height: '300px',
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
