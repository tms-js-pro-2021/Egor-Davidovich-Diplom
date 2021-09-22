import React from 'react';
import RoomItem from '../RoomItem';

const RoomList = ({ rooms, setRooms, handleDeleteRoom }) => {
  return (
    <div>
      {rooms.length !== 0 &&
        rooms.map((item) => (
          <RoomItem
            key={item.id}
            handleDeleteRoom={handleDeleteRoom}
            {...item}
            setRooms={setRooms}
          />
        ))}
    </div>
  );
};

export default RoomList;
