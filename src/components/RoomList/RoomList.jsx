import React from 'react';
import RoomItem from '../RoomItem';

const RoomList = ({ rooms, handleDeleteRoom }) => {
  const sortedRooms = rooms.sort((a, b) => (a.UpdatedAt < b.UpdatedAt ? 1 : -1));

  return (
    <div>
      {rooms.length &&
        sortedRooms.map((item) => (
          <RoomItem key={item.id} handleDeleteRoom={handleDeleteRoom} {...item} />
        ))}
    </div>
  );
};

export default RoomList;
