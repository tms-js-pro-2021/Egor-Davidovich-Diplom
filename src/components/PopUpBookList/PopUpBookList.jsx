import React, { useEffect, useState } from 'react'
import { api } from '../../Api'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from '@material-ui/core'

const PopUpBookList = ({ open, handleClose, ...item }) => {
  const [dates, setDates] = useState([])

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

  const convertDateTime = (date) => {
    return date.substr(0, 16).replace('T', ' ')
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>BOOKS</DialogTitle>
      <DialogContent>
        {dates.map((item) => {
          return (
            <ul>
              <li>START - {convertDateTime(item.startDateTime)}</li>
              <li>END - {convertDateTime(item.endDateTime)}</li>
            </ul>
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
