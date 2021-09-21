// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogTitle from '@material-ui/core/DialogTitle';

// const PopUpAdd = ({ open, handleClose, rooms, handleDelete, id }) => {
//   const handleDeleteRoom = () => {
//     try {
//       fetch(`https://tms-js-pro-back-end.herokuapp.com/api/todos/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization:
//             'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
//         },
//       }).then(() => {
//         const clonedRooms = [...rooms];
//         clonedRooms.filter((item) => item.id !== id);
//         handleDelete(clonedRooms);
//         console.log(clonedRooms);
//         handleClose();
//       });
//     } catch (error) {
//       console.log('SERVER ERROR');
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <DialogTitle id="alert-dialog-title">{'Are you sure delete this room?'}</DialogTitle>
//       <DialogActions>
//         <Button onClick={handleClose} color="primary">
//           CANCEL
//         </Button>
//         <Button onClick={handleDeleteRoom} color="primary" autoFocus>
//           OK
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default PopUpAdd;
