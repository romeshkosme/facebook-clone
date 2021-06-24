import React, {useState} from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";

function MessageSender() {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("")
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
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div class="messageSender__option">
            <Videocam style={{ color: 'red' }} />
            <h3>Live Video</h3>
        </div>
        <div class="messageSender__option">
            <PhotoLibrary style={{ color: 'green' }} />
            <h3>Photo/Video</h3>
        </div>
        <div class="messageSender__option">
            <InsertEmoticon style={{ color: 'orange' }} />
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
