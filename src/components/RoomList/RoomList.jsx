import React from 'react';
import RoomItem from '../RoomItem';

const RoomList = ({ rooms, handleDeleteRoom }) => {
  const sortedRooms = rooms.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  return (
    <>
      {rooms.length !== 0 &&
        sortedRooms.map((item) => (
          <RoomItem key={item.id} handleDeleteRoom={handleDeleteRoom} {...item} />
        ))}
    </>
  );
};

export default RoomList;
