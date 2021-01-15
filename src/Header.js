import React from "react";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <h2>Skymails</h2>
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="search ..." />
        <ArrowDropDownIcon classNam="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
