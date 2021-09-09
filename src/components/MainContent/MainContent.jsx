import React, { useEffect, useState } from 'react';
import styles from './MainContent.module.scss';
import roomImage from '../../image/room.svg';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import classnames from 'classnames';

const MainContent = () => {
  // const [rooms, setRooms] = useState([
  //   {id: Date.now(), title: 'Conference Room #1', guests: '17'},
  //   {id: Date.now(), title: 'Conference Room #2', guests: '12'}
  // ])

  // useEffect(() => {

  // })

  return (
    <div className={styles.main}>
      <button className={styles.button__add}>
        <AddToPhotosOutlinedIcon
          style={{
            fontSize: '4rem',
          }}
        />
        <span className={styles.button__add__text}>ADD NEW ROOM</span>
      </button>
      <ul className={styles.rooms}>
        <li className={styles.room}>
          <div className={styles.info__block}>
            <div className={styles.room__info}>
              <span className={styles.room__title}>Conference Room #1</span>
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
        </li>
        <li className={styles.room}>
          <div className={styles.info__block}>
            <div className={styles.room__info}>
              <span className={styles.room__title}>Conference Room #1</span>
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
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
