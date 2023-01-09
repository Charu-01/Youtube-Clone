import React, { useState } from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {
   const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_of_YouTube_%282011-2013%29.svg/640px-Logo_of_YouTube_%282011-2013%29.svg.png" 
            alt=""
           />
        </Link>
      </div>

      <div className="header__input">
        <input 
        onChange={(e) => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder="Search"
        type="text" 
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className='header__icons'>
      <VideoCallIcon className='header__icon' />
        <AppsIcon  className='header__icon' />
        <NotificationsIcon  className='header__icon' />
        <Avatar 
           alt="Charu Saini"
           src="https://mui.com/material-ui/react-avatar/#image-avatars"
        />
      </div> 

    </div>
  );
}

export default Header;
