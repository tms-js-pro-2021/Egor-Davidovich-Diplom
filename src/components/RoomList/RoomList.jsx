import React, { useEffect, useState } from 'react';
import RoomItem from '../RoomItem';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    try {
      fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTYzNjM5NTk5NSwiaWF0IjoxNjMxMjExOTk1fQ.C-rdvGj-bj16smVKORldxkTYw75ZHu1aBXtlQ5ivk-o',
        },
      })
        .then((data) => data.json())
        .then((data) => setRooms(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  return <div className>{rooms.length !== 0 && rooms.map((item) => <RoomItem {...item} />)}</div>;
};

export default RoomList;
