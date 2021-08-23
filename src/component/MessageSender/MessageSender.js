import React, { useRef } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import { onInputChange, createPost } from "../../store/post/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getValidator } from "../../helpers/utils";

function MessageSender(props) {
  const validator = useRef(getValidator());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      props.createPost({
        content: props.postContent
      })
    } else {
      validator.current.showMessages();
    }
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="What's on your mind.. "
            className="messageSender__input"
            value={props.postContent}
            onChange={(e) => props.onInputChange("postContent", e.target.value)}
          />
          {validator.current.message("postContent", props.postContent, "_required", {
            className: "text-red-500 text-xs",
          })}
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div class="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div class="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div class="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

// export default MessageSender;
const mapStateToProps = (state) => {
  const { postContent, postError } = state.Post;
  return { postContent, postError };
};

export default withRouter(
  connect(mapStateToProps, { onInputChange, createPost })(MessageSender)
);
