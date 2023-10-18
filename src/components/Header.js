import React from 'react'
import './Header.css' ;
import Avatar from '@mui/material/Avatar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }]=useStateValue();
  return (
    <div className='header'>
        <div className="header__left">
            <Avatar
                className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
                />
                <AccessTimeIcon/>
            {/* Avatars for logged in users */}
            {/* Time icon */}
        </div>
        <div className="header__search">
            <SearchIcon/>
            <input placeholder='Search here'/>
            {/* Search icon */}
            {/* input */}
        </div>
        <div className="header__right">
            <HelpOutlineIcon/>
            {/* help icon */}
        </div>
      
    </div>
  )
}

export default Header
