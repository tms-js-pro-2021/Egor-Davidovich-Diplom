import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined'
import { Alert } from '@material-ui/lab'
import RoomList from '../../components/RoomList'
import styles from './HomePage.module.scss'
import PopUpAdd from '../PopUpAdd/PopUpAdd'
import api from '../../Api'

const MainContent = (props) => {
  const [isShowPopupAdd, setIsShowPopupAdd] = useState(false)
  const [isMessageError, setMessageError] = useState(false)
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
      setMessageError(true)
    }
  }, [])

  const handleDeleteRoom = (id) => {
    try {
      defaultFetch(`${api.rooms}${id}`, 'DELETE', token).then(() => {
        const clonedRooms = [...rooms]
        setRooms(clonedRooms.filter((item) => id !== item.id))
      })
    } catch (error) {
      setMessageError(true)
      console.log('server error')
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
      setMessageError(true)
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
      {isMessageError && (
        <div className={styles.error__message__pass}>
          <Alert variant="filled" severity="error">
            SERVER ERROR
          </Alert>
        </div>
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
