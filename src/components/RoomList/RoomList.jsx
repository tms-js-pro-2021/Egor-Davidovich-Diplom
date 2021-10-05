import React from 'react'
import RoomItem from '../RoomItem'

const RoomList = ({ rooms, events, handleDeleteRoom, token, setEvents }) => {
  const sortedRooms = rooms.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))

  return (
    <>
      {rooms.length !== 0 &&
        sortedRooms.map((item) => (
          <RoomItem
            events={events}
            key={item.id}
            token={token}
            handleDeleteRoom={handleDeleteRoom}
            setEvents={setEvents}
            {...item}
          />
        ))}
    </>
  )
}

export default RoomList
