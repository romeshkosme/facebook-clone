import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { ChatBubbleOutline, NearMe, AccountCircle, ExpandMore } from "@material-ui/icons";

function Post(props) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={props.profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{props.username}</h3>
          <p>Timestamp</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{props.message}</p>
      </div>

      <div className="post__image">
        <img src={props.image} alt="" srcset="" />
      </div>

      <div className="post__options">
        <div className="post__option">
            <ThumbUpIcon />
            <p>Like</p>
        </div>
        <div className="post__option">
            <ChatBubbleOutline />
            <p>Commect</p>
        </div>
        <div className="post__option">
            <NearMe />
            <p>Share</p>
        </div>
        <div className="post__option">
            <AccountCircle />
            <ExpandMore />
        </div>
      </div>
    </div>
  );
}

export default Post;
