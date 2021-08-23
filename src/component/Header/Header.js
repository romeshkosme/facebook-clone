import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
// import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
// import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Avatar } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { logoutUser } from "../../store/auth/login/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HeaderProfileMenu from "../HeaderProfileMenu/HeaderProfileMenu";

function Header(props) {
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <React.Fragment>
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
          alt="facebook icon"
        />
        <div className="header__input">
          <SearchIcon fontSize="large" />
          <input type="text" placeholder="Search" name="" id="" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisorAccountIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right flex items-center">
        <div className="bg-gray-200 rounded-full p-2">
          <AppsIcon />
        </div>
        <div className="bg-gray-200 rounded-full p-2 ml-1">
          <ForumIcon />
        </div>
        <div className="bg-gray-200 rounded-full p-2 ml-1">
          <NotificationsActiveIcon />
        </div>
        <div className="ml-1">
          <Avatar
            className="cursor-pointer"
            // onClick={() => props.logoutUser(props.history)}
            onClick={() => setProfileMenu(!profileMenu)}
          />
        </div>
      </div>
    </div>
    {profileMenu && <HeaderProfileMenu className="" />}
    </React.Fragment>

  );
}

// export default Header;
export default withRouter(connect(null, { logoutUser })(Header));
