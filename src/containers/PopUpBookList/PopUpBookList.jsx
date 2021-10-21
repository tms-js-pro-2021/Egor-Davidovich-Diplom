import React, { useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@material-ui/core'
import api from '../../api'
import styles from './PopUpBookList.module.scss'

const PopUpBookList = ({ open, handleClose, dates, setDates, ...item }) => {
  useEffect(() => {
    try {
      fetch(`${api.bookRoom}?meetRoom=${item.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((data) => setDates(data))
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }, [])

  const convertDateTime = (date) => date.substr(0, 16).replace('T', ' ')

  const sortedEvents = dates.sort((a, b) =>
    a.startDateTime > b.startDateTime ? 1 : -1
  )

  const getCheckedFeatures = (obj) =>
    Object.keys(obj)
      .filter((key) => obj[key])
      .join(', ') || 'No features'

  return (
    <Dialog open={open} onClose={handleClose} className={styles.popup}>
      <DialogTitle className={styles.popup__title}>BOOKINGS</DialogTitle>
      <DialogContent>
        {sortedEvents.map((event) => {
          return (
            <div className={styles.popup__info} key={event.id}>
              <span className={styles.popup__info__type}>
                {event.customFields?.eventType}
              </span>
              <ul>
                <li>START - {convertDateTime(event.startDateTime)}</li>
                <li>END - {convertDateTime(event.endDateTime)}</li>
                <li>
                  Guests -{' '}
                  {event.guestsCount === null ? 'No guests' : event.guestsCount}
                </li>
                <li>Features - {getCheckedFeatures(event.stuff)}</li>
              </ul>
            </div>
          )
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PopUpBookList
