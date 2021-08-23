import React, {useEffect} from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import './Dashboard.css'
import RightSideBar from "../RightSideBar/RightSideBar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAll } from "../../store/post/actions";

function Dashboard(props) {
  useEffect(() => {
    props.getAll()
  }, []);
  return (
    <React.Fragment>
      <div className="dashboard">
        <Header />
        <div className="dashboard__body">
          <Sidebar />
          <Feed posts={props.feeds}/>
          <RightSideBar />
        </div>
      </div>
    </React.Fragment>
  );
}

// export default Dashboard;
const mapStateToProps = (state) => {
  const { feeds } = state.Post;
  return { feeds };
};

export default withRouter(
  connect(mapStateToProps, { getAll })(Dashboard)
);

