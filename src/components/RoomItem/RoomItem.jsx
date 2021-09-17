import React, { useState } from 'react';
import styles from './RoomItem.module.scss';
import classnames from 'classnames';
import roomImage from '../../image/room.svg';
import PopUpDel from '../PopUpDel';

const RoomItem = ({ ...item }) => {
  const [isShowPopupDel, setIsShowPopupDel] = useState(false);

  return (
    <div className={styles.room}>
      <div className={styles.info__block}>
        <div className={styles.room__info}>
          <span className={styles.room__title}>{item.description}</span>
          <img className={styles.room__image} src={roomImage} alt="room" />
        </div>
        <div className={styles.room__description}>
          <span>Guests: 12</span>
          <span>Floor: 14</span>
          <span>Extra features:</span>
          <span>Projector, Web Camera, Catering</span>
        </div>
      </div>
      <div>
        <button className={classnames(styles.room__buttons__more, styles.room__buttons)}>
          Book
        </button>
        <button
          onClick={() => setIsShowPopupDel(true)}
          className={classnames(styles.room__buttons__delete, styles.room__buttons)}
        >
          Delete room
        </button>
      </div>
      {isShowPopupDel && <PopUpDel />}
    </div>
  );
};

export default RoomItem;
