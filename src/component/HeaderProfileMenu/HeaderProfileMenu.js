import React from "react";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { logoutUser } from "../../store/auth/login/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function HeaderProfileMenu(props) {
  return (
    <div className="HeaderProfileMenu w-1/4 origin-top-right absolute right-0 mt-1 mr-5 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div className="p-4">
        <ul className="list-none">
          <li className="my-1 flex  p-2 rounded-sm cursor-pointer hover:bg-gray-300 hover:bg-opacity-50">
            <Avatar />
            <div className="pl-3">
              <p className="text-l font-medium">Romesh Kosme</p>
              <span className="text-sm">See your profile</span>
            </div>
          </li>
          <span className="border-b-2 border-gray-300 w-full"></span>
          <li className="my-1 flex border-b-2 border-gray-300 p-2 rounded-sm cursor-pointer hover:bg-gray-200 hover:bg-opacity-50">
            <span className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
              <AnnouncementIcon />
            </span>
            <div className="pl-3">
              <p className="text-l font-medium">Give Feedback</p>
              <span className="text-sm">Help us improve the new Facebook</span>
            </div>
          </li>
          <li className="my-1 flex items-center cursor-pointer p-2 rounded-sm hover:bg-gray-200 hover:bg-opacity-50" onClick={() => props.logoutUser(props.history)}>
            <span className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
              <ExitToAppIcon />
            </span>
            <p className="pl-3 text-l font-medium">Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

// export default HeaderProfileMenu;
export default withRouter(connect(null, { logoutUser })(HeaderProfileMenu));