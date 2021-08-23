import React from "react";
import "./RightSideBar.css";
import AddIcon from "@material-ui/icons/Add";

function RightSideBar() {
  return (
    <div className="w-1/4 p-10">
      <h1 className="text-l text-gray-400 pl-2 mb-1 select-none">Group Conversation</h1>
      <div className="flex items-center py-3 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-1">
          <AddIcon className="bg-gray-300 hover:bg-opacity-90 rounded-full font-l" style={{fontSize: '1.7rem'}} />
        <p className="text-l pl-2">Create New Group</p>
      </div>
    </div>
  );
}

export default RightSideBar;
