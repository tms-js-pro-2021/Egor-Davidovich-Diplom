import React, { useEffect, useState } from 'react';
import styles from './MainContent.module.scss';
import roomImage from '../../image/room.svg';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import classnames from 'classnames';

const MainContent = () => {
  const [rooms, setRooms] = useState([]);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [roomStuff, setRoomStuff] = useState({
    title: '',
    guests: 0,
    booked: Date.now(),
    stuff: {
      coffee: true,
      tea: true,
      projector: false,
      water: true,
      webCamera: false,
      board: true,
      catering: false,
    }
  });

  useEffect(() => {
    try {
      fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o'
        },

      })
        .then(data => data.json())
        .then(data => setRooms(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  return (
    <div className={styles.main} style={{
      position: 'relative',

    }}>
      <button onClick={() => setIsShowPopup(true)}>click</button>
      <button className={styles.button__add}>
        <AddToPhotosOutlinedIcon
          style={{
            fontSize: '4rem',
          }}
        />
        <span className={styles.button__add__text}>ADD NEW ROOM</span>
      </button>
      <div className={styles.rooms}>
        {rooms.length !== 0 && rooms.map(item => (
          <div className={styles.room}>
            <div className={styles.info__block}>
              <div className={styles.room__info}>
                <span className={styles.room__title}>{item.description}</span>
                <img className={styles.room__image} src={roomImage} alt="room" />
              </div>
              <div className={styles.room__description}>
                <span>Guests: 12</span>
                <span>Extra features:</span>
                <span>Projector, Web Camera, Catering</span>
              </div>
            </div>
            <div>
              <button className={classnames(styles.room__buttons__more, styles.room__buttons)}>
                Watch more
              </button>
              <button className={classnames(styles.room__buttons__delete, styles.room__buttons)}>
                Delete room
              </button>
            </div>
          </div>
        ))}
      </div>

      {isShowPopup && (
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          background: 'rgba(0,0,0, .5)'

        }}>
          <div style={{
            position: 'absolute',
            background: 'rgba(0,0,0, .5)',
            width: '300px',
            height: '300px',
          }}>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
