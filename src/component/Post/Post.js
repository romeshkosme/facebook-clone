import React, {useState} from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {
  ChatBubbleOutline,
  NearMe,
  AccountCircle,
  ExpandMore,
} from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import PostMenu from "../PostMenu/PostMenu";

function Post(props) {

  const [postMenu, setPostMenu] = useState(false)
  return (
    <div className="post">
      <div className="post__top w-full">
        <Avatar src={props.profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{props.username}</h3>
          <p>Timestamp</p>
        </div>
        <div className="ml-auto">
          <IconButton onClick={() => setPostMenu(!postMenu)}>
            <MoreHorizIcon />
          </IconButton>
          {postMenu && <PostMenu/>}
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
