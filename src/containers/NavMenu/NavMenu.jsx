import * as React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'

const NavMenu = ({ handleLogIn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
          fontSize: '1.5rem',
          color: 'white',
          justifyContent: 'flex-end',
        }}
      >
        &#xFE19;
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleLogIn}>LOG IN</MenuItem>
        <MenuItem onClick={handleClose}>HOME</MenuItem>
        <MenuItem onClick={handleClose}>ROOMS</MenuItem>
        <MenuItem onClick={handleClose}>ABOUT</MenuItem>
        <MenuItem onClick={handleClose}>CONTACT US</MenuItem>
      </Menu>
    </div>
  )
}

export default NavMenu
