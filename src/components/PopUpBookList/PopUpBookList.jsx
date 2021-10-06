import React, { useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@material-ui/core'
import { api } from '../../Api'
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

  const getCheckedFeatures = (obj) =>
    Object.keys(obj)
      .filter((key) => obj[key])
      .join(', ') || 'No features'

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className={styles.popup__title}>BOOKINGS</DialogTitle>
      <DialogContent>
        {dates.map((item) => {
          return (
            <div>
              Meeting
              <ul>
                <li>START - {convertDateTime(item.startDateTime)}</li>
                <li>END - {convertDateTime(item.endDateTime)}</li>
                <li>Features - {getCheckedFeatures(item.stuff)}</li>
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
