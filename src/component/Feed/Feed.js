import React from "react";
import "./Feed.css";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getAll } from "../../store/post/actions";

function Feed(props) {

  console.log("props.getAll :: ", props.getAll())
  return (
    <div className="feed">
      <MessageSender />
      {props.feeds.map(item => 
      <Post
      username="romesh"
      profilePic=""
      message={item.content}
      timestamp="This is timestamp."
      image="https://th.bing.com/th/id/Rc431f7c59472dc7dff4c9ed864a1bd94?rik=m6fZ4%2f0Kcr8rhg&riu=http%3a%2f%2fregex.info%2fi%2fJF4_018037.jpg&ehk=TLWFMdQmt2vTFjCJFNRDWIJRr4hV%2bOvN3WnQGXKtyA8%3d&risl=&pid=ImgRaw"
    />  
      )}
      {/* <Post
        username="romesh"
        profilePic=""
        message="Wow. This works."
        timestamp="This is timestamp."
        image="https://th.bing.com/th/id/Rc431f7c59472dc7dff4c9ed864a1bd94?rik=m6fZ4%2f0Kcr8rhg&riu=http%3a%2f%2fregex.info%2fi%2fJF4_018037.jpg&ehk=TLWFMdQmt2vTFjCJFNRDWIJRr4hV%2bOvN3WnQGXKtyA8%3d&risl=&pid=ImgRaw"
      />
      <Post username="romesh" profilePic="" /> */}
    </div>
  );
}

// export default Feed;
const mapStateToProps = (state) => {
  const { feeds } = state.Post;
  return { feeds };
};

export default withRouter(
  connect(mapStateToProps, { getAll })(Feed)
);

