import React, { useEffect, useState } from 'react';
import styles from './MainContent.module.scss';
import roomImage from '../../image/room.svg'

const MainContent = () => {
  // const [rooms, setRooms] = useState([
  //   {id: Date.now(), title: 'Conference Room #1', guests: '17'},
  //   {id: Date.now(), title: 'Conference Room #2', guests: '12'}
  // ])

  // useEffect(() => {

  // })


  return (
    <ul className={styles.main}>
      <li className={styles.room}>
        <span className={styles.room__title}>Conference Room #1</span>
        <div className={styles.room__info}>
          <img src={roomImage} alt="room" />
          <div className={styles.room__description}>
            <span>Guests: 17</span>
            <span>Extra features:</span>
            <span>Projector, Web Camera, Catering</span>
          </div>
          <div className={styles.room__buttons}>
            <button className={styles.room__buttons__more}>Watch more</button>
            <button className={styles.room__buttons__delete}>Delete room</button>
          </div>
        </div>
      </li>
      <li className={styles.room}>
        <span className={styles.room__title}>Conference Room #1</span>
        <div className={styles.room__info}>
          <img src={roomImage} alt="room" />
          <div className={styles.room__description}>
            <span>Guests: 17</span>
            <span>Extra features:</span>
            <span>Projector, Web Camera, Catering</span>
          </div>
          <div className={styles.room__buttons}>
            <button className={styles.room__buttons__more}>Watch more</button>
            <button className={styles.room__buttons__delete}>Delete room</button>
          </div>
        </div>
      </li>
      <li className={styles.room}>
        <span className={styles.room__title}>Conference Room #1</span>
        <div className={styles.room__info}>
          <img src={roomImage} alt="room" />
          <div className={styles.room__description}>
            <span>Guests: 17</span>
            <span>Extra features:</span>
            <span>Projector, Web Camera, Catering</span>
          </div>
          <div className={styles.room__buttons}>
            <button className={styles.room__buttons__more}>Watch more</button>
            <button className={styles.room__buttons__delete}>Delete room</button>
          </div>
        </div>
      </li>

    </ul>
  );
};

export default MainContent;
