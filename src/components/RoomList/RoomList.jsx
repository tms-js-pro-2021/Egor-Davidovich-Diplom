import React from 'react';
import RoomItem from '../RoomItem';

const RoomList = ({ rooms, events, handleDeleteRoom, token }) => {
  const sortedRooms = rooms.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  // const unitedRoomsEvents = sortedRooms.concat(events);
  let result = sortedRooms.map(item => {
    let { id, description, floor, address } = item;
    let { guests,
      startDateTime,
      endDateTime,
      meetRoom } = events.reduce((acc, data) => {
        if (meetRoom == id) {
          acc.guests += data.guests;
          acc.startDateTime += data.startDateTime;
          acc.endDateTime += data.endDateTime;
        }
        return acc;
      }, { guests: 0,  startDateTime: 0, endDateTime: 0 });
    return {id, description, floor, address, guests,
   startDateTime,
      endDateTime,
      meetRoom  }
  });
  
  console.log(result);
  console.log(events)
  return (
    <>
      {rooms.length !== 0 &&
        sortedRooms.map((item) => (

          <RoomItem key={item.id} token={token} handleDeleteRoom={handleDeleteRoom} {...item} />
        ))}
    </>
  );
};

export default RoomList;



