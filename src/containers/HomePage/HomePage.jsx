import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined'
import RoomList from '../../components/RoomList'
import styles from './HomePage.module.scss'
import PopUpAdd from '../PopUpAdd/PopUpAdd'
import api from '../../api'

const MainContent = (props) => {
  const [isShowPopupAdd, setIsShowPopupAdd] = useState(false)
  const [rooms, setRooms] = useState([])
  const {
    token: { token },
  } = props

  const defaultFetch = (url, methodFetch, tokenUser, body) => {
    return fetch(url, {
      method: methodFetch,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${tokenUser}`,
      },
    })
  }

  useEffect(() => {
    try {
      defaultFetch(api.rooms, 'GET')
        .then((data) => data.json())
        .then((data) => setRooms(data))
    } catch (error) {
      console.log('SERVER ERROR')
    }
  }, [])

  const handleDeleteRoom = (id) => {
    try {
      defaultFetch(`${api.rooms}${id}`, 'DELETE', token).then(() => {
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
      defaultFetch(api.rooms, 'POST', token, newRoom)
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
      {token && (
        <button
          type="button"
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
        token={token}
        handleDeleteRoom={handleDeleteRoom}
        defaultFetch={defaultFetch}
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
