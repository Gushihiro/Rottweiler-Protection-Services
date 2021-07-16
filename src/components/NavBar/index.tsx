import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './NavBar.css'

interface Props {
  currentPage: string
}
export default function NavBar({currentPage}: Props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar'>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to={'/'}>
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to={'/services'}>
              <MenuItem onClick={handleClose}>Services</MenuItem>
            </Link>
            <Link to={'/about'}>
              <MenuItem onClick={handleClose}>About Us</MenuItem>
            </Link>
            <Link to={'/theteam'}>
              <MenuItem onClick={handleClose}>Meet The Team</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6">
            Rottweiler Protection Services | {currentPage}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
