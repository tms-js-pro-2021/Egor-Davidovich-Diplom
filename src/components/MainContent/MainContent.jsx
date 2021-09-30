import React, { useEffect, useState } from 'react';
import RoomList from '../RoomList';
import styles from './MainContent.module.scss';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import PopUpAdd from '../PopUpAdd/PopUpAdd';
import { api } from '../../Api';

const MainContent = () => {
  const [isShowPopupAdd, setIsShowPopupAdd] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    try {
      fetch(api.rooms, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      })
        .then((data) => data.json())
        .then((data) => setRooms(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  const handleDeleteRoom = (id) => {
    try {
      fetch(`${api.rooms}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      }).then(() => {
        const clonedRooms = [...rooms];
        setRooms(clonedRooms.filter((item) => id !== item.id));
      });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

  const handleAddRoom = ({ description, address, floor }) => {
    const newRoom = {
      description,
      address,
      floor,
    };
    try {
      fetch(api.rooms, {
        method: 'POST',
        body: JSON.stringify(newRoom),
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setRooms([...rooms, { ...newRoom, ...response }]);
        });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

  return (
    <div className={styles.main}>
      <button onClick={() => setIsShowPopupAdd(true)} className={styles.button__add}>
        <AddToPhotosOutlinedIcon
          style={{
            fontSize: '4rem',
          }}
        />
        <span className={styles.button__add__text}>ADD NEW ROOM</span>
      </button>
      <RoomList rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
      <PopUpAdd
        open={isShowPopupAdd}
        handleClose={() => setIsShowPopupAdd(false)}
        handleAddRoom={handleAddRoom}
      />
    </div>
  );
};

export default MainContent;
