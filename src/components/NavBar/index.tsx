import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import logo from '../../images/rottylogo.png';
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

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='navbar'>
      <AppBar position="static">
        <Toolbar>
          <div className='popoverCont'>
          <IconButton edge="start" color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          </div>
            <Popover
              className='popoverCont'
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
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
              <Link to={'/contactus'}>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
              </Link>
            </Popover>
          <Typography variant="h6">
            Rottweiler Protection Services | {currentPage} 
          </Typography>
        </Toolbar>
        <div className="appbarLinks">
          <Link to={'/'}>
            <h4>Home</h4>
          </Link>
          <Link to={'/services'}>
            <h4>Services</h4>
          </Link>
          <Link to={'/theteam'}>
            <h4>Meet The Team</h4>
          </Link>
          <Link to={'/contactus'}>
            <h4>Contact Us</h4>
          </Link>
        </div>
      </AppBar>
    </div>
  )
}
