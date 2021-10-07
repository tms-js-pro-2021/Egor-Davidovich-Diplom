import React, { useState } from 'react'
import classnames from 'classnames'
import { Button } from '@material-ui/core'
import styles from './RoomItem.module.scss'
import roomImage from '../../image/room.svg'
import PopUpDel from '../PopUpDel'
import PopUpBook from '../PopUpBook'
import PopUpBookList from '../PopUpBookList'

const RoomItem = ({ handleDeleteRoom, token, events, setEvents, ...item }) => {
  const [isShowPopupDel, setIsShowPopupDel] = useState(false)
  const [isShowPopupBook, setIsShowPopupBook] = useState(false)
  const [isShowPopupBookList, setIsShowPopupBookList] = useState(false)
  const [dates, setDates] = useState([])
  console.log(dates)
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
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={() => setIsShowPopupBookList(true)}
            >
              Bookings
            </Button>
          </div>
        </div>
        <div>
          <button
            onClick={() => setIsShowPopupBook(true)}
            className={classnames(
              styles.room__buttons__more,
              styles.room__buttons
            )}
          >
            Book
          </button>
          {token && (
            <button
              onClick={() => setIsShowPopupDel(true)}
              className={classnames(
                styles.room__buttons__delete,
                styles.room__buttons
              )}
            >
              Delete room
            </button>
          )}
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
        id={item.id}
        handleClose={() => setIsShowPopupBook(false)}
        setEvents={setEvents}
        events={events}
        setDates={setDates}
        dates={dates}
        {...item}
      />
      <PopUpBookList
        open={isShowPopupBookList}
        id={item.id}
        setDates={setDates}
        dates={dates}
        handleClose={() => setIsShowPopupBookList(false)}
        {...item}
      />
    </div>
  )
}

export default RoomItem
