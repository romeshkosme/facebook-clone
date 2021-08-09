import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import './Dashboard.css'
import RightSideBar from "../RightSideBar/RightSideBar";

function Dashboard(props) {
  console.log("props dashboard :: ", props)
  return (
    <React.Fragment>
      <div className="dashboard">
        <Header />
        <div className="dashboard__body">
          <Sidebar />
          <Feed />
          <RightSideBar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
