import React from "react";
import "./PostMenu.css";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

function PostMenu(props) {
  return (
    <div className="origin-top-right absolute right-0 mt-1 mr-5 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div className="p-2">
        <ul className="list-none">
          <li className="flex py-1 cursor-pointer">
            <BookmarkBorderOutlinedIcon />
            <div className="flex flex-col">
              <p className="text-l">Save Post</p>
              <span className="text-xs text-gray-500">
                Add this to your saved items.
              </span>
            </div>
          </li>
          <li className="flex py-1 cursor-pointer">
            <HighlightOffRoundedIcon />
            <div className="flex flex-col">
              <p className="text-l">Hide Post</p>
              <span className="text-xs text-gray-500">
                See fewer posts like this.
              </span>
            </div>
          </li>
          <li className="flex py-1 cursor-pointer">
            <EditRoundedIcon />
            <div className="flex flex-col">
              <p className="text-l">Edit Post</p>
              {/* <span className="text-xs text-gray-500">
                See fewer posts like this.
              </span> */}
            </div>
          </li>
          <li className="flex py-1 cursor-pointer">
            <DeleteForeverRoundedIcon />
            <div className="flex flex-col">
              <p className="text-l">Delete Post</p>
              {/* <span className="text-xs text-gray-500">
                See fewer posts like this.
              </span> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostMenu;
