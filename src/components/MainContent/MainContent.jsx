import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined'
import RoomList from '../RoomList'
import styles from './MainContent.module.scss'
import PopUpAdd from '../PopUpAdd/PopUpAdd'
import { api } from '../../Api'

const MainContent = (props) => {
  const [isShowPopupAdd, setIsShowPopupAdd] = useState(false)
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    try {
      fetch(api.rooms, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((data) => setRooms(data))
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }, [])

  const handleDeleteRoom = (id) => {
    try {
      fetch(`${api.rooms}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${props.token.token}`,
        },
      }).then(() => {
        const clonedRooms = [...rooms]
        setRooms(clonedRooms.filter((item) => id !== item.id))
      })
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }

  const handleAddRoom = ({ description, address, floor }) => {
    const newRoom = {
      description,
      address,
      floor,
    }
    try {
      fetch(api.rooms, {
        method: 'POST',
        body: JSON.stringify(newRoom),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${props.token.token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setRooms([...rooms, { ...newRoom, ...response }])
        })
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }

  return (
    <div className={styles.main}>
      {props.token.token && (
        <button
          onClick={() => setIsShowPopupAdd(true)}
          className={styles.button__add}
        >
          <AddToPhotosOutlinedIcon
            style={{
              fontSize: '4rem',
            }}
          />
          <span className={styles.button__add__text}>ADD NEW ROOM</span>
        </button>
      )}
      <RoomList
        rooms={rooms}
        token={props.token.token}
        handleDeleteRoom={handleDeleteRoom}
      />
      <PopUpAdd
        open={isShowPopupAdd}
        handleClose={() => setIsShowPopupAdd(false)}
        handleAddRoom={handleAddRoom}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  token: state.token,
})

export default connect(mapStateToProps)(MainContent)
