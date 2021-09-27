import React, { useState } from 'react';
import styles from './RoomItem.module.scss';
import classnames from 'classnames';
import roomImage from '../../image/room.svg';
import PopUpDel from '../PopUpDel';
import PopUpBook from '../PopUpBook';

const RoomItem = ({ handleDeleteRoom, ...item }) => {
  const [isShowPopupDel, setIsShowPopupDel] = useState(false);
  const [isShowPopupBook, setIsShowPopupBook] = useState(false);
  return (
    <div className={styles.room}>
      <span className={styles.room__title}>{item.description}</span>
      <div className={styles.info__block}>
        <img className={styles.room__image} src={roomImage} alt="room" />
        <div>
          <div className={styles.room__description}>
            <span>Address:</span>
            <span>{item.address}</span>
            <span>Floor: {item.floor}</span>
          </div>
        </div>
        <div>
          <button onClick={() => setIsShowPopupBook(true)} className={classnames(styles.room__buttons__more, styles.room__buttons)}>
            Book
          </button>
          <button
            onClick={() => setIsShowPopupDel(true)}
            className={classnames(styles.room__buttons__delete, styles.room__buttons)}
          >
            Delete room
          </button>
        </div>
      </div>
      <PopUpDel
        open={isShowPopupDel}
        handleClose={() => setIsShowPopupDel(false)}
        handleDeleteRoom={handleDeleteRoom}
        id={item.id}
      />
      <PopUpBook 
      open={isShowPopupBook}
      handleClose={() => setIsShowPopupBook(false)}
      {...item}
      />
    </div>
  );
};

export default RoomItem;
