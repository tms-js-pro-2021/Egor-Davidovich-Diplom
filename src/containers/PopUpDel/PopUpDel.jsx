import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

const PopUpDel = ({ open, handleClose, handleDeleteRoom, id }) => {
  const deleteRoomFromList = () => {
    handleDeleteRoom(id)
    handleClose()
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure delete this room?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          CANCEL
        </Button>
        <Button onClick={deleteRoomFromList} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PopUpDel
